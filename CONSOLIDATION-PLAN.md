# BLE Estate Consolidation Plan

**Status:** proposal. No repo, domain, or deployment has been changed.
**Date:** 2026-09-08
**Scope:** all 10 repos and 10 Vercel projects under `bthammond`, plus BLE TimeClock on Fly.io.

---

## 1. Why

Ten apps, one maintainer, four data stacks, five marketing properties, and two
CRMs. The problem is not a missing app — it is duplication and the absence of a
shared spine. This plan cuts ten repos to six, names one owner per domain
object, and puts every app behind one identity.

It also fixes a live problem: **development effort is going into a site that
serves no domain** (see §2).

### Decisions locked

| Question | Answer |
|---|---|
| Is `ble-training-site` legacy? | **Yes** — superseded by `ble-website` |
| Does `growth-os` survive? | **No** — kill it |
| CourseBldr or InstructorKit? | **CourseBldr** — retire/redirect `instructorkit.com` |
| Does `brianthammond-v2` survive? | **No** — kill it |

---

## 2. Ground truth: what is actually live

Pulled from the Vercel API on 2026-09-08, not from repo names.

| Domain | Served by | Last production deploy |
|---|---|---|
| `ble.training`, `www.ble.training` | **`ble-website`** | Sep 1 |
| `dashboard.ble.training` | `ble-hq` | Aug 2 |
| `learning.ble.training` | `ble-lms` | Jul 27 |
| `onboarding.ble.training` | `ble-onboarding` | Sep 8 |
| `timeclock.ble.training` | `ble-timeclock` (Fly.io) | — |
| `familybusinessperformance.group` | `fbp-group-app` | Sep 8 |
| `coursebldr.ai` **and** `instructorkit.com` | `training-gen` | Sep 6 |
| `brianthammond.com` | `brianthammond-com` (also still claimed by `brianthammond-v2`) | Sep 5 |
| *(no custom domain)* | **`ble-training-site`** | Sep 8 |
| *(no custom domain)* | `growth-os` | Jun 8 |

Two findings that shape everything below:

1. **`ble-training-site` has no domain but is still being actively developed.**
   It has taken ~14 merged PRs since `ble-website` took `ble.training` in late
   July, including work merged the same day this plan was written. That effort
   reaches no visitors.

2. **`ble-website`'s Vercel project has no GitHub link.** Production deploys by
   CLI. The live site therefore has no PR previews and no CI gate, while every
   superseded sibling has both. This is backwards and is the first thing to fix.

---

## 3. Target estate

**Four public brands**

| Property | Repo | Purpose |
|---|---|---|
| `ble.training` | `ble-website` | Testing centers, org training, consulting |
| `familybusinessperformance.group` | `fbp-group-app` | FBP consulting practice + client portal |
| `coursebldr.ai` | `training-gen` | CourseBldr product |
| `brianthammond.com` | `brianthammond-com` | Authority / personal |

**Five apps**

| App | Repo | Owns |
|---|---|---|
| TimeClock | `ble-timeclock` | **People, locations, hours** |
| Onboarding | `ble-onboarding` | New-hire paperwork |
| HQ | `ble-hq` | Internal ops, vendors, maintenance, culture |
| Academy / LMS | `ble-lms` | **Learners, courses, certificates** |
| FBP Portal | `fbp-group-app` | **Clients, engagements, invoices** |

Ten repos become six.

---

## 4. Repo dispositions

| Repo | Call | Rationale |
|---|---|---|
| `ble-website` | **Keep** — canonical `ble.training` | Holds the domain |
| `fbp-group-app` | **Keep + promote** | Becomes the consulting platform for both brands |
| `ble-timeclock` | **Keep + promote** | Becomes people/locations source of truth |
| `ble-lms` | Keep | — |
| `ble-onboarding` | Keep | — |
| `ble-hq` | Keep | Supabase migration largely done; six `AppContext` keys remain (§8) |
| `training-gen` | Keep — **one brand** | Retire or 301 `instructorkit.com` → `coursebldr.ai` |
| `ble-training-site` | **Retire** after salvage (§5) | Superseded; no domain |
| `growth-os` | **Kill** | Second CRM, scaffold stage, dormant since June |
| `brianthammond-v2` | **Kill** | Superseded; still claiming the domain |
| `find-a-center-hub` | **Archive** | Untouched since Feb 2025 |

---

## 5. Salvage list — what must move before `ble-training-site` is archived

Route diff, `ble-training-site/src/app` against `ble-website/app`. Routes the
old site has that the live site does not:

| Old route | Status on live site | Action |
|---|---|---|
| `/locations`, `/locations/[city]` | Already 301'd → `/testing-centers` | None — done |
| `/register`, `/testing` | Already 301'd | None — done |
| `/insights/*` (5 articles) | Rewritten under new slugs, **301s already in place** | None — done |
| `/catalog` | Was 301'd to a 4-card page | **Shipped** in ble-website#7 → `/courses/catalog` |
| `/careers` + proctor application | Was 301'd to `/about` | **Shipped** in ble-website#7 |
| `/resources`, `/why-ble` | Already 301'd to `/insights` and `/about` | Confirm the redirect is the intent |
| `/register/checklist` | Covered by the `/register/*` 301 | Confirm |

**Correction to the route diff (2026-09-08).** The 301s listed above as work
were already present. `ble-website/next.config.ts` already redirected all five
old insight slugs plus `/catalog`, `/resources`, `/why-ble` and `/careers`.
The original diff compared route directories and missed the redirect table.
Two entries were nonetheless real regressions, because a redirect to a page
that does not carry the content is not a fix:

- **The course catalog.** `src/data/courses.ts` holds **153 courses** with
  title, overview, objectives, and category across 10 categories — 1,945 lines
  of real content, gated behind `CatalogGate` for lead capture. The live site's
  `/courses` is a marketing page with **4 hardcoded track cards**. This is the
  single largest content asset in the estate and it was offline. Shipped in
  ble-website#7 as `/courses/catalog` plus a static page per course —
  **ungated**, since the wall hid all 153 courses from search.

- **Lead capture.** The old site posts to `/api/lead` and `/api/subscribe`,
  which write to **Mailchimp** with full context and then ping the inbox via
  Resend. The live site has `/api/contact` only — Resend email, nothing
  durable. There is no reference to Mailchimp anywhere in `ble-website`.
  **Leads submitted on `ble.training` today exist only as email.** The proctor
  application pipeline (`/careers`) does not exist on the live site at all.

Fixing those two is Phase 1's real payload. Archiving the repo is the trivial
part.

---

## 6. The spine

The part that does not exist today. Three rules.

### 6.1 One identity

**Supabase**, already used by `ble-hq` and `ble-lms` and already paid for.

Each app keeps its own database. Only authentication consolidates. One place
to revoke access when someone leaves — which today means remembering five
separate systems.

**Correction (2026-09-08).** An earlier revision said this included "a single
shared `ADMIN_PASSWORD` in the app that handles SSNs." That was wrong, and it
was the most alarming claim in this document. `ble-onboarding` has real
multi-user accounts (`lib/users.ts`, roles `super_admin` / `manager`), TOTP
2FA, password reset, account lockout and login rate limiting. The
`ADMIN_PASSWORD` line came from its README, which predates all of that.

The case for one identity therefore rests on offboarding and operational tax
— five systems to cut access in, five credential sets for 34 people, two
separate Supabase projects between HQ and the LMS — not on an unguarded app.
That is a real problem but a less urgent one than stated.

### 6.2 One owner per object

| Object | Owner | Everyone else |
|---|---|---|
| Employees, locations, hours | TimeClock | reads |
| Clients, engagements, invoices | FBP | reads |
| Learners, courses, certificates | LMS | reads |
| Leads and inquiries | FBP | reads |

### 6.3 Contracts, not shared databases

Readers consume a small token-authenticated JSON endpoint from the owner.

**This pattern already exists and works** — `ble-website/lib/center-status.ts`
reads TimeClock's `/api/public/center-status` with a 4-second timeout, 60-second
revalidation, bearer token, and a fail-to-null fallback that renders no pill
rather than a wrong one. Extend that pattern. Do not invent a new one, and do
not let two apps share a database directly.

Alongside it, a shared **`locations` package** so `Center.slug` and
`timeclockLocationId` stop being hand-verified against production at deploy
time — a hazard `ble-website/INTEGRATIONS.md` documents against itself today.

---

## 7. Phases

Each phase ships independently and is reversible.

### Phase 1 — stop the bleed (days)

1. Reconnect `ble-website`'s Vercel project to GitHub. Production gets CI and
   PR previews before anything else touches it. **Outstanding — yours.**
2. ~~Port the catalog.~~ Shipped, ble-website#7 (ungated, per-course pages).
3. ~~Port `/careers` + the proctor application.~~ Shipped, ble-website#7 —
   rebuilt as a real server route; the old one only opened a `mailto:` draft.
4. ~~Restore Mailchimp lead capture.~~ Shipped, ble-website#7. Needs
   `MAILCHIMP_*` set to switch on — **outstanding, yours.**
5. ~~Add 301s for the old insight slugs.~~ Already existed.
6. `/resources` and `/why-ble` — already 301'd; confirm that is the intent.
7. Point `ble-training-site`'s README at its successor; archive the repo.
   **Blocked on #7 merging.**
8. Retire `growth-os`, `brianthammond-v2`, `find-a-center-hub`. **Yours.**
9. Redirect `instructorkit.com` → `coursebldr.ai`. **Yours.**
10. CI on `ble-website` — the repo had no `.github` at all. Shipped,
    ble-website#8.

### Phase 2 — the spine (weeks)

1. Shared `locations` package; remove the hand-verified ID mapping.
2. ~~Confirm HQ's Supabase config is live in production.~~ Verified (§8).
3. Finish HQ's migration — the six editable `AppContext` keys.
4. Auth onto one Supabase project, one app at a time, behind a flag, old path
   live for one release.

### Phase 3 — the joins

1. BLE consulting clients into the FBP portal as a second tenant — not a fork.
2. BLE's scorecard results write into FBP's `Assessment` model. They are the
   same idea built twice.
3. LMS courses surface inside an FBP engagement's materials.

### Phase 4 — the one genuinely missing app

**Center Ops.** Exam volume + no-shows + incidents, joined against TimeClock
labour hours, producing margin per center per month. Nothing in the estate
touches testing revenue today; FBP invoices consulting only. This is the only
item on the list that is a new build rather than a consolidation.

**Correction (2026-09-08).** Two of the three "remaining gaps" listed here
were already built.

- **Applicant tracking exists.** `ble-onboarding` carries a 12-stage hiring
  pipeline mapped to BLE's own process doc (job posted → applicant noted →
  phone screen → STAR interview → application sent/returned with a 48h SLA →
  conditional offer → paperwork → I-9 §2 → HR verified → welcome packet →
  day one), with per-role stage ownership, candidate source tracking and a
  funnel-by-source report, job postings, an Indeed applicant import, and
  background-check tracking. Stages 5-12 auto-mark off real events.
- **Offboarding is half built.** Exit interviews (standalone and
  session-linked, with PDF output and a manager-facing area) exist. What is
  missing is the access-revocation checklist and its audit trail.

The genuine remaining gaps are that checklist, the small matter of wiring the
new `/careers` form to create a candidate (`source: 'website'` is already a
valid value), and a candidate-facing exam-day app.

**Why this kept happening.** Three claims in this plan came from repository
READMEs that lag their code badly — ble-hq's persistence layer, ble-onboarding's
auth model, and ble-onboarding's scope. Every one overstated a problem. Treat
any remaining unverified claim here as suspect until read against the code;
`ble-lms`, `fbp-group-app` and `training-gen` have not had that pass.

---

## 8. Risks and reversibility

| Change | Risk | Mitigation |
|---|---|---|
| Domain moves | Feels irreversible | DNS. Reversible in minutes. |
| Auth consolidation | Locking people out | Per-app, behind a flag, old path live for one release |
| **HQ's last 6 localStorage keys → Postgres** | Losing what those six hold | Rescue-on-read, per the pattern the other 21 hooks use |
| Archiving repos | Losing content | Salvage (§5) merged and deployed *before* archiving |
| Deleting Vercel projects | Not reversible | Disconnect only. Leave dormant 30 days. |

**Correction (2026-09-08).** An earlier revision of this plan called HQ's
persistence a silent-total-data-loss hazard, on the strength of the repo
README. Reading the code instead shows the opposite: `ble-hq` has largely
**completed** its Supabase migration — 21 Supabase-backed hooks (team,
vendors, maintenance, testing partners, points, documents, events, posts,
resources, shout-outs, suggestions, acknowledgments, audit log and more)
across 52 migrations, each with a one-time, idempotent rescue that lifts
legacy `localStorage` rows into the shared table. The README is stale, not
the code.

What is left on `localStorage` is 11 keys in `AppContext.tsx` and
`Sidebar.tsx`, of which only six are editable (`reminders.v2`, `settings.v2`,
`feedReactions`, `pulses.v2`, `pulseResponses.v2`, `microQuestions`). Four
have no setter and are seed caches; `railCollapsed` is a per-browser UI
preference that belongs where it is.

**The caveat is closed (verified 2026-09-08).** `isSupabaseConfigured` is
`Boolean(VITE_SUPABASE_URL && VITE_SUPABASE_ANON_KEY)`, so unset env vars
would have meant all 21 hooks silently falling back to `localStorage` and the
original warning holding after all. Session egress to `dashboard.ble.training`
is blocked by policy, but Vite inlines `import.meta.env.*` at build time, so
the deployed bundle settles it: `ble-hq.vercel.app`'s shipped JS carries a
real project host and anon key, and — the stronger signal — the
`unconfigured.supabase.co` / `unconfigured-anon-key` fallbacks are **absent
entirely**, which only happens when Vite eliminated that branch because the
env var was truthy at build. Supabase is configured in production.

The deployed bundle also matches the source read exactly: all 11
`usePersistentState` keys ship, and the six migrated modules' `LEGACY_KEY`
constants ship alongside their `…:rescued` flags — the migration running in
production, not merely planned.

---

## 9. Not yet decided

- Where this document permanently lives. It is committed to
  `ble-training-site` because that is the repo this session can push to — the
  repo the plan proposes retiring. It should move to `ble-website` or a small
  dedicated ops repo in Phase 1.
- Whether `/resources` and `/why-ble` are ported or dropped.
- Whether `instructorkit.com` is redirected or released.
- Which Supabase project becomes the identity provider (HQ's or LMS's).

---

## Appendix — how this was established

- Repo inventory and READMEs: GitHub API across all 10 repos.
- Live domain map and deploy timestamps: Vercel API, team
  `bthammonds-projects`, 2026-09-08.
- FBP capability surface: `prisma/schema.prisma` (~50 models) and the
  `app/portal` + `app/admin` route trees.
- Route and API diff: `find` over `ble-training-site/src/app` against
  `ble-website/app`.
- Catalog size: `grep -c '"id":' src/data/courses.ts` → 153.
- Integration pattern: `ble-website/INTEGRATIONS.md`,
  `ble-training-site/src/lib/timeclock-status.ts`.
