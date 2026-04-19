import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticle } from "@/lib/articles";

const article = getArticle("why-best-performers-make-worst-managers")!;

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
        Every mid-market business eventually promotes its top performer. The
        logic seems obvious: if they&apos;re great at the work, they must be
        great at leading the work. It&apos;s the most common — and most
        expensive — promotion decision in American business.
      </p>

      <p>
        Gallup data suggests roughly <strong>70% of employee engagement
        variance is attributable to the manager.</strong> Translation: whoever
        runs a team is the single biggest factor in whether that team performs.
        And most companies hand that role to the person who was best at doing
        the job — which is a completely different skill set.
      </p>

      <h2>The individual-contributor mindset</h2>

      <p>
        A top individual contributor succeeds through a simple loop: work
        harder than everyone else, be better than everyone else at the
        specific craft, be the person the team turns to when the work is hard.
        That&apos;s the whole job. Output is visible. Performance is personal.
      </p>

      <p>The manager&apos;s job inverts every piece of that:</p>

      <ul>
        <li>
          <strong>Output becomes invisible.</strong> You no longer produce the
          work. You produce the people who produce the work.
        </li>
        <li>
          <strong>Performance becomes indirect.</strong> Your wins are on other
          people&apos;s resumes.
        </li>
        <li>
          <strong>The reflex that made you great</strong> — &ldquo;I&apos;ll
          just do it myself&rdquo; — becomes your biggest liability.
        </li>
      </ul>

      <p>
        The worst version of a promoted top performer is the manager who still
        tries to do the job themselves, but now with the added overhead of a
        team they&apos;re supposed to lead. They&apos;re slower than when they
        were an IC (meetings, 1:1s, admin) but also less effective as a leader
        (they keep stepping in and doing the work). It&apos;s the worst of
        both worlds.
      </p>

      <h2>Why technical excellence doesn&apos;t predict leadership</h2>

      <p>
        The skills that made someone a top performer are rarely the skills a
        manager needs:
      </p>

      <table>
        <thead>
          <tr>
            <th>IC skill</th>
            <th>Manager skill</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Personal execution</td><td>Delegation</td></tr>
          <tr><td>Subject expertise</td><td>Context framing</td></tr>
          <tr><td>Self-motivation</td><td>Team motivation</td></tr>
          <tr><td>Independent judgment</td><td>Coaching toward judgment</td></tr>
          <tr><td>Owning the answer</td><td>Holding the question</td></tr>
        </tbody>
      </table>

      <p>
        Some people have both. Most don&apos;t — not because they&apos;re
        lacking, but because they&apos;ve never been taught the second set.{" "}
        <strong>Management is a craft.</strong> Like any craft, it can be
        learned. But it has to be taught deliberately — and that rarely
        happens in the first 90 days of a new manager&apos;s tenure.
      </p>

      <h2>The 90-day failure pattern</h2>

      <p>
        We&apos;ve watched this movie a hundred times. It plays out almost
        identically:
      </p>

      <h3>Days 1–30</h3>
      <p>
        The new manager is excited. They&apos;re still doing much of the IC
        work (they can&apos;t quite let go). They schedule their first 1:1s.
        They feel overextended but chalk it up to the transition.
      </p>

      <h3>Days 31–60</h3>
      <p>
        The team&apos;s best performers start noticing something. The new
        manager is still in the weeds. They&apos;re micromanaging some
        decisions and ignoring others. Feedback is inconsistent. The team
        quietly adjusts — they stop asking for guidance, because it comes with
        strings.
      </p>

      <h3>Days 61–90</h3>
      <p>
        The first real conflict happens. A team member pushes back on
        something. The new manager handles it badly — either too softly
        (&ldquo;let&apos;s just move on&rdquo;) or too sharply (&ldquo;I need
        you to do this&rdquo;). The team calibrates. They&apos;ve now learned:
        our new manager is not safe to disagree with. The honest conversations
        stop. The theater begins.
      </p>

      <p>
        By day 90, in many cases, the pattern is locked. The manager now has a
        team that performs just below capability, because the psychological
        safety required for real performance was quietly eroded in the first
        three months.
      </p>

      <h2>What actually works</h2>

      <p>
        You cannot fix this with a one-day &ldquo;manager training&rdquo;
        workshop. You fix it with a structured, 90-day{" "}
        <Link href="/how-we-work">manager onboarding program</Link> that
        treats leadership as the new job — not a bonus to the old job.
      </p>

      <p>A good first-time-manager onboarding typically includes:</p>

      <ol>
        <li>
          <strong>A dedicated coach or mentor</strong> for the first 90 days —
          someone to talk through real situations with.
        </li>
        <li>
          <strong>Explicit scope handoff</strong> — what the new manager is
          stopping doing, in writing.
        </li>
        <li>
          <strong>Weekly skill-focused coaching</strong> covering delegation,
          feedback, difficult conversations, and team operating rhythms.
        </li>
        <li>
          <strong>Observed practice</strong> — the new manager leads real
          meetings while a coach observes and debriefs.
        </li>
        <li>
          <strong>90-day checkpoint</strong> — honest review with the team,
          not just the manager. What&apos;s working? What&apos;s not?
        </li>
      </ol>

      <p>
        This isn&apos;t fluff. It&apos;s the difference between a manager
        who&apos;s merely &ldquo;surviving their first year&rdquo; and one who
        is actually building a team capable of carrying load.
      </p>

      <h2>The real cost of getting it wrong</h2>

      <p>
        Let&apos;s put numbers on it. Replacing a good employee costs roughly
        1.5–2× annual salary (recruiting, ramp time, lost productivity). A
        team of 8 under a mediocre manager loses, on average, one or two of
        its top performers in the first 18 months — not because of pay, but
        because of the manager. That&apos;s $150K–$300K in replacement cost,
        quietly burned because the company treated manager development as
        optional.
      </p>

      <p>
        Multiply that across an organization. Most mid-market companies are
        quietly losing a seven-figure sum every year to manager gaps they
        haven&apos;t named.
      </p>

      <h2>The fix isn&apos;t complicated</h2>

      <p>
        Pick your new managers more carefully. Train them before they fail.
        Measure their team&apos;s performance, not their own. And when it
        isn&apos;t working, have the hard conversation early — while the
        pattern can still be rewritten.
      </p>

      <p>
        The best performers on your team aren&apos;t automatically your worst
        managers. But they will be — unless you treat the promotion as the
        beginning of an entirely new job, not the reward for the last one.
      </p>
    </ArticleLayout>
  );
}
