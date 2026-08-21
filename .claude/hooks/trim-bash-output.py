#!/usr/bin/env python3
"""PreToolUse hook: append output-reducing flags to noisy Bash commands.

Claude Code hands this script the pending tool call as JSON on stdin. When the
command matches one of the rules below, we hand back a rewritten command via
hookSpecificOutput.updatedInput and the tool runs the shorter version instead.

Why this exists: every line a command prints becomes tool-result tokens, which
are written into the prompt cache and then re-read on every subsequent turn of
the session. `npm install` alone is worth a few thousand tokens of funding
notices and audit summaries that nobody reads.

Design rules, in order of importance:

1. Never change whether a command succeeds. We only add flags that suppress
   chatter; exit codes, stderr and real error text are left alone.
2. Never touch a compound command. Anything containing && || ; | > < ` $( or a
   newline is passed through untouched -- rewriting one clause of a pipeline is
   how you turn a noise filter into a bug.
3. Be idempotent. A command that already carries the flag is left alone, so a
   rewritten command re-submitted verbatim is not rewritten twice.
4. Say so out loud. Every rewrite emits a systemMessage, because a hook that
   silently edits commands is very hard to debug from the transcript.

Deliberately NOT handled: `npm run build` / `next build`. Build output is the
one place where the noise IS the signal, and quieting it risks hiding a failure.

Exit 0 with no stdout means "no opinion, run it as-is". Any unexpected error
also falls through to that, so a bug in here can never block a command.
"""

import json
import re
import sys

# Any of these mean the command is doing more than one thing; leave it alone.
COMPOUND = re.compile(r"[&|;<>`\n]|\$\(")


def add_flags(cmd: str, flags: list[str]) -> str:
    """Append each flag that isn't already present."""
    for flag in flags:
        # Match the flag as a whole word so --no-audit doesn't match --no-auditx.
        if not re.search(rf"(?<!\S){re.escape(flag)}(?!\S)", cmd):
            cmd = f"{cmd} {flag}"
    return cmd


def rewrite(cmd: str) -> tuple[str, str] | None:
    """Return (new_command, human_reason) or None to leave the command alone."""
    stripped = cmd.strip()

    # npm install / npm i / npm ci -- fund + audit banners are pure noise, and
    # --loglevel=error keeps real failures while dropping per-package chatter.
    if re.match(r"^npm\s+(install|i|ci)(\s|$)", stripped):
        new = add_flags(stripped, ["--no-fund", "--no-audit", "--loglevel=error"])
        if new != stripped:
            return new, "quieted npm install banners"
        return None

    # Bare `git status` prints a paragraph per section; --short is a line per file.
    if re.match(r"^git\s+status$", stripped):
        return "git status --short --branch", "git status -> short form"

    # Unbounded `git log` can dump the entire history. NOTE: unlike the rules
    # above, this one DOES truncate -- it is a cap, not a formatting change.
    if re.match(r"^git\s+log(\s|$)", stripped):
        if not re.search(r"(?<!\S)(-n(?!\S)|-n\d|--max-count|-\d+)(?!\S)", stripped):
            return f"{stripped} -n 30", "capped git log at 30 commits"
        return None

    return None


def main() -> None:
    try:
        payload = json.load(sys.stdin)
    except (json.JSONDecodeError, ValueError):
        return

    if payload.get("tool_name") != "Bash":
        return

    tool_input = payload.get("tool_input") or {}
    cmd = tool_input.get("command")
    if not isinstance(cmd, str) or not cmd.strip():
        return

    if COMPOUND.search(cmd):
        return

    result = rewrite(cmd)
    if result is None:
        return

    new_cmd, reason = result
    json.dump(
        {
            "systemMessage": f"trim-bash-output: {reason}",
            "hookSpecificOutput": {
                "hookEventName": "PreToolUse",
                # No permissionDecision: the normal permission flow still runs.
                "updatedInput": {**tool_input, "command": new_cmd},
            },
        },
        sys.stdout,
    )


if __name__ == "__main__":
    try:
        main()
    except Exception:
        # A broken noise filter must never stop a command from running.
        pass
