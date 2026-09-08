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
| `ble-hq` | Keep — **after** the Postgres move | Currently persists to `localStorage` (see §7 risk) |
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
| `/insights/*` (5 articles) | Rewritten under new slugs | **Add 301s** old slug → new slug to preserve SEO |
| `/catalog` | **Missing** | **Port** — see below |
| `/careers` + proctor application | **Missing entirely** | **Port** |
| `/resources` | **Missing** | Port or consciously drop |
| `/why-ble`, `/register/checklist` | **Missing** | Fold into existing pages or drop |

Two of these are functional regressions on the live site today, not just
missing pages:

- **The course catalog.** `src/data/courses.ts` holds **153 courses** with
  title, overview, objectives, and category across 10 categories — 1,945 lines
  of real content, gated behind `CatalogGate` for lead capture. The live site's
  `/courses` is a marketing page with **4 hardcoded track cards**. This is the
  single largest content asset in the estate and it is currently offline.

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
to revoke access when someone leaves — which today means remembering six
separate systems, including a single shared `ADMIN_PASSWORD` in the app that
handles SSNs.

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
   PR previews before anything else touches it.
2. Port the catalog (153 courses + `CatalogGate`) to `ble-website`.
3. Port `/careers` + the proctor application form.
4. Restore Mailchimp lead capture on the live site.
5. Add 301s for the 5 old insight slugs.
6. Decide `/resources` and `/why-ble`: port or drop.
7. Point `ble-training-site`'s README at its successor; archive the repo.
8. Retire `growth-os`, `brianthammond-v2`, `find-a-center-hub`.
9. Redirect `instructorkit.com` → `coursebldr.ai`.

### Phase 2 — the spine (weeks)

1. Shared `locations` package; remove the hand-verified ID mapping.
2. **Export HQ's `localStorage` data before touching anything** (§8).
3. HQ onto Postgres.
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

Remaining gaps after that, in rough priority: applicant tracking (closes
careers → onboarding → TimeClock, of which the last link already exists);
offboarding and access revocation; a candidate-facing exam-day app.

---

## 8. Risks and reversibility

| Change | Risk | Mitigation |
|---|---|---|
| Domain moves | Feels irreversible | DNS. Reversible in minutes. |
| Auth consolidation | Locking people out | Per-app, behind a flag, old path live for one release |
| **HQ `localStorage` → Postgres** | **Silent total data loss** | See below |
| Archiving repos | Losing content | Salvage (§5) merged and deployed *before* archiving |
| Deleting Vercel projects | Not reversible | Disconnect only. Leave dormant 30 days. |

**The HQ data hazard deserves emphasis.** `ble-hq` persists module data via
`usePersistentState` to `localStorage`. That data lives only in individual
browsers — there may be no server copy of anything anyone has entered into the
vendor directory, maintenance schedules, or points ledger. Before migrating,
export from a browser that has it, and check whether some of it has already
been lost to a cleared cache. Do not add another HQ module until this is done.

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
