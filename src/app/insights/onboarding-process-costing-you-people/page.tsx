import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticle } from "@/lib/articles";

const article = getArticle("onboarding-process-costing-you-people")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.metaDescription,
  alternates: { canonical: `/insights/${article.slug}` },
  openGraph: {
    title: `${article.title} | BLE Training`,
    description: article.metaDescription,
    url: `https://www.ble.training/insights/${article.slug}`,
    type: "article",
    publishedTime: article.publishDate,
    authors: [article.author],
  },
};

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <p>
        The first 90 days of a new hire&apos;s employment decides whether they
        stay, whether they perform, and whether they end up being worth the 18
        months of ramp time it took to hire them in the first place. Most
        companies know this.
      </p>

      <p>Almost none of them act like it.</p>

      <p>
        Here&apos;s the uncomfortable data: SHRM research suggests{" "}
        <strong>roughly 30% of new hires leave within the first 90
        days.</strong> The Work Institute&apos;s exit interview data finds
        onboarding and early job experience in the top five reasons people
        leave a company. And the cost of that early attrition — at 1.5–2×
        salary replacement — is almost always preventable.
      </p>

      <p>
        The fix isn&apos;t complicated. But it requires separating two things
        most companies confuse: orientation and onboarding.
      </p>

      <h2>Orientation is not onboarding</h2>

      <p>
        <strong>Orientation</strong> is the paperwork, the benefits enrollment,
        the building tour, the laptop setup. It takes about 48 hours. Most
        companies do it reasonably well.
      </p>

      <p>
        <strong>Onboarding</strong> is the 90-day process of making a new
        employee productive, connected, and committed to the role. It takes
        real work. Most companies do it badly or not at all.
      </p>

      <p>
        The difference shows up on day three. An oriented new hire has their
        laptop, their badge, and a copy of the employee handbook. An onboarded
        new hire has a clear understanding of what they&apos;re supposed to
        accomplish in their first quarter, who to turn to when they&apos;re
        stuck, and at least one early win under their belt.
      </p>

      <p>
        The first version creates a hire who shows up. The second creates a
        hire who performs.
      </p>

      <h2>What new hires actually need</h2>

      <p>
        After watching thousands of onboarding processes play out — good ones
        and bad ones — the pattern is clear. New hires need three things in
        their first 30 days, and they need them in this order:
      </p>

      <h3>1. Clarity</h3>
      <p>
        What does success look like in this role? Not the vague job description
        — the specific, measurable outcomes that define &ldquo;performing&rdquo;
        at 30, 60, and 90 days. Most companies don&apos;t do this. They assume
        the new hire will figure it out. They don&apos;t.
      </p>
      <p>
        A new hire without clarity is a new hire who is guessing. Guessing
        creates anxiety. Anxiety creates underperformance. Underperformance
        creates early departure.
      </p>

      <h3>2. Connection</h3>
      <p>
        Who are the key people this hire needs to know, beyond their manager?
        Cross-functional partners, the person they&apos;ll collaborate with
        most, the unofficial mentor, the team members whose context matters.
        Companies that leave this to chance end up with isolated new hires who
        have no network to turn to when the work gets hard.
      </p>
      <p>
        A deliberate &ldquo;connection plan&rdquo; — a short list of people the
        new hire will meet in structured 1:1s in their first two weeks —
        solves this cheaply.
      </p>

      <h3>3. Quick wins</h3>
      <p>
        By day 21, the new hire needs at least one small, visible win.
        Something they delivered. Something the team noticed. This matters for
        two reasons: it builds the new hire&apos;s confidence in their choice
        to join, and it builds the team&apos;s confidence in the new
        hire&apos;s capability.
      </p>
      <p>
        A good manager engineers these wins deliberately. They don&apos;t
        happen by accident in a company of more than 15 people.
      </p>

      <h2>Why sink-or-swim onboarding destroys retention</h2>

      <p>
        The mental model at too many companies is: &ldquo;we hired capable
        people, they&apos;ll figure it out.&rdquo; It sounds tough-minded.
        It&apos;s actually wasteful.
      </p>

      <p>
        Capable people can figure it out — eventually. But the cost of that
        figuring-out is borne by the new hire (who burns through their initial
        enthusiasm in frustration) and by the team (who absorbs the ramp-up
        drag without support). By the time the new hire finally hits
        productive stride, they&apos;ve often already decided — consciously or
        not — that this isn&apos;t a place where they feel set up to win.
      </p>

      <p>
        The best ones leave in month five. The ones who stay are often the
        ones who&apos;ve learned to operate at 70% capacity, because
        that&apos;s all the system asked of them.
      </p>

      <p>Sink-or-swim isn&apos;t toughness. It&apos;s laziness with better branding.</p>

      <h2>A 90-day framework that works</h2>

      <p>
        The specifics will vary by role and industry, but the shape of a
        working onboarding program is consistent:
      </p>

      <h3>Days 1–7 — Orientation and foundations</h3>
      <p>
        Paperwork, systems access, office/team tour. First 1:1 with the
        manager that establishes 30/60/90-day expectations in writing.
        Introduction meetings with 3–5 key stakeholders scheduled.
      </p>

      <h3>Days 8–30 — Context and early wins</h3>
      <p>
        The new hire shadows, reads, observes, and completes 1–2 small but
        real deliverables. Weekly 1:1s with the manager focus on calibration:
        what&apos;s making sense, what isn&apos;t, what context they&apos;re
        missing. One deliberate &ldquo;quick win&rdquo; shipped by day 21.
      </p>

      <h3>Days 31–60 — Ownership</h3>
      <p>
        The new hire takes ownership of a real scope of work. They&apos;re
        still in ramp, but they&apos;re producing — not watching. The
        manager&apos;s role shifts from teacher to coach. 1:1s focus on
        obstacles and decisions.
      </p>

      <h3>Days 61–90 — Full performance</h3>
      <p>
        By day 90, the new hire should be operating at the expected level of
        the role. The manager runs a 90-day review that is honest —
        what&apos;s working, what&apos;s not, what needs adjustment. This is
        the conversation that converts early performance into sustained
        performance.
      </p>

      <h2>Two things worth investing in</h2>

      <p>If you only do two things to improve onboarding, do these:</p>

      <ol>
        <li>
          <strong>Write down the 30/60/90-day expectations for every role, in
          advance.</strong> Not during onboarding — before you start hiring.
        </li>
        <li>
          <strong>
            Train your managers on{" "}
            <Link href="/how-we-work">how to onboard</Link>.
          </strong>{" "}
          Most managers inherit the pattern they experienced as new hires. If
          that pattern was bad, they&apos;ll repeat it.
        </li>
      </ol>

      <p>
        Your onboarding system is either actively retaining your new hires or
        actively losing them. There is no neutral. If you&apos;re not sure
        which side it&apos;s on, ask the three people who most recently left
        in the first year.
      </p>

      <p>They&apos;ll tell you.</p>
    </ArticleLayout>
  );
}
