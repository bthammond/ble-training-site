import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticle } from "@/lib/articles";

const article = getArticle("real-cost-of-leadership-gap")!;

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
        There&apos;s an invisible line item on every mid-market P&amp;L. It
        doesn&apos;t show up in your accounting software. Your CFO doesn&apos;t
        flag it. Your board doesn&apos;t ask about it. But it&apos;s there,
        quietly burning money every month.
      </p>

      <p>It&apos;s the cost of undertrained leaders.</p>

      <p>
        Most business owners accept this cost without naming it. They should
        lose a key employee every 18 months. They should have one
        underperforming manager per 40 people. They should spend 30% of their
        own time fixing problems their managers should be solving. When these
        costs are invisible, they feel like normal operating reality. They
        aren&apos;t.
      </p>

      <p>Let&apos;s put numbers on the invisible.</p>

      <h2>Cost 1: Turnover</h2>

      <p>
        Replacing an employee costs somewhere between{" "}
        <strong>1.5× and 2× their annual salary.</strong> SHRM, BLS, and
        Center for American Progress data all cluster in this range. That
        figure includes:
      </p>

      <ul>
        <li>Recruiting (fees, time, screening)</li>
        <li>
          Onboarding and ramp time (new hires hit full productivity around
          8–12 months)
        </li>
        <li>Lost institutional knowledge</li>
        <li>Productivity gap on the remaining team</li>
      </ul>

      <p>
        For a $75K employee, the replacement cost is roughly{" "}
        <strong>$110K–$150K</strong>. If your 50-person company loses 5 people
        a year to preventable issues, that&apos;s{" "}
        <strong>$550K–$750K annually.</strong>
      </p>

      <p>
        Now here&apos;s the uncomfortable part:{" "}
        <strong>
          most preventable turnover is a management problem, not a pay
          problem.
        </strong>{" "}
        People don&apos;t leave companies; they leave managers. The Work
        Institute&apos;s exit-interview data consistently points to manager
        behavior, career growth, and day-to-day job conditions — all
        manager-controlled — as the top three drivers of voluntary departures.
      </p>

      <p>
        So: if your company is losing good people and you&apos;re solving it
        with comp bumps, you&apos;re treating a symptom. The underlying cost
        is your manager gap.
      </p>

      <h2>Cost 2: The productivity drag of a bad manager</h2>

      <p>
        Gallup&apos;s long-running research is blunt:{" "}
        <strong>
          managers account for roughly 70% of the variance in employee
          engagement.
        </strong>{" "}
        Translation: the single biggest factor in whether a team performs is
        who leads it.
      </p>

      <p>
        Engaged teams outperform disengaged teams by meaningful margins —
        higher productivity, lower absenteeism, lower quality defects. Gallup
        estimates the engagement gap at roughly <strong>21% higher
        profitability</strong> for highly engaged teams.
      </p>

      <p>
        Take a team of 8 earning an average of $80K. Their fully-loaded cost
        is roughly $960K/year. A manager-driven engagement gap of even 10% is{" "}
        <strong>$96K of output lost per year, per team.</strong> Across a
        mid-market company with 10 teams, that&apos;s nearly{" "}
        <strong>$1M annually</strong> — flowing out the door because managers
        weren&apos;t trained in the craft of leading.
      </p>

      <h2>Cost 3: The compounding cost of delayed succession</h2>

      <p>
        This is the one most owner-led businesses ignore until it&apos;s too
        late.
      </p>

      <p>
        Every year you delay serious succession and leadership development,
        three things happen:
      </p>

      <ol>
        <li>
          <strong>Your next-generation talent gets older</strong> — and less
          flexible, less moldable, less willing to learn new frameworks.
        </li>
        <li>
          <strong>Your key employees start quietly leaving</strong> because the
          succession picture is unclear and they see no future.
        </li>
        <li>
          <strong>The owner gets busier, not less busy</strong> — because
          nobody else has been developed to carry load.
        </li>
      </ol>

      <p>
        The compounding effect is brutal. A business that delays succession by
        five years doesn&apos;t just lose five years of development; it loses
        the ability to make the transition at all without a painful, rushed,
        expensive change.
      </p>

      <p>
        Family businesses are particularly vulnerable. We&apos;ve watched
        owners who were &ldquo;ready to step back in two years&rdquo; still
        signing every check a decade later — because nobody was ever actually
        developed to take their place. (More on this in our{" "}
        <Link href="/insights/family-business-succession-guide">
          family business succession guide
        </Link>
        .)
      </p>

      <h2>How to calculate your leadership gap cost</h2>

      <p>
        If you want to make this visible on your own P&amp;L, here&apos;s the
        math:
      </p>

      <h3>Step 1: Turnover cost</h3>
      <p>
        Number of voluntary departures in the last 12 months × 1.75 × average
        fully-loaded salary.
      </p>

      <h3>Step 2: Engagement gap</h3>
      <p>
        Headcount × average fully-loaded salary × 10% (conservative estimate
        of manager-driven output gap).
      </p>

      <h3>Step 3: Owner-time cost</h3>
      <p>
        Hours per week the owner spends fixing problems managers should solve
        × 52 × owner&apos;s loaded hourly cost.
      </p>

      <h3>Step 4: Add steps 1, 2, and 3</h3>

      <p>
        For a typical 50-person, $10M-revenue company, this math routinely
        lands between <strong>$500K and $1.5M per year.</strong> For a family
        business with no succession plan, add another $200K–$500K in
        optionality cost — what it will eventually cost to rush a transition
        that should have been planned.
      </p>

      <p>
        Most business owners, when they see the math, immediately object:
        &ldquo;we can&apos;t lose that much without noticing.&rdquo; But they
        do notice — they just don&apos;t connect the symptoms to the cause.
        The chronic turnover, the always-busy founder, the middle-manager
        churn, the teams that never quite hit the forecast — those aren&apos;t
        separate problems. They&apos;re the same problem wearing different
        clothes.
      </p>

      <h2>What to do about it</h2>

      <p>
        You don&apos;t fix this with a workshop. You fix it with a deliberate,
        multi-year investment in leadership capability. A few places to start:
      </p>

      <ol>
        <li>
          <Link href="/scorecard">Diagnose your gap</Link> — an honest
          assessment of where your leadership bench actually stands.
        </li>
        <li>
          Invest in first-time{" "}
          <Link href="/how-we-work">manager training</Link> — the single
          highest-ROI investment most mid-market companies can make.
        </li>
        <li>
          <Link href="/consulting">Design a succession pipeline</Link> — not
          just for the CEO role, but for every key seat.
        </li>
        <li>
          Measure manager quality, not just manager output — team retention,
          team engagement, team capability growth.
        </li>
      </ol>

      <p>
        The cost of doing nothing isn&apos;t zero. It&apos;s just invisible —
        until the day a key person leaves, a next-generation transition
        stalls, or a founder realizes they can&apos;t step back because
        nobody&apos;s ready to step up.
      </p>

      <p>That day is always sooner than it looks.</p>
    </ArticleLayout>
  );
}
