import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticle } from "@/lib/articles";

const article = getArticle("family-business-succession-guide")!;

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
        Most family business succession plans fail. Not loudly — quietly. The
        attorney drafts the documents. The family signs them. And then nothing
        changes. The founder still makes every decision. The next generation
        still waits. And twenty years later, the business is still running on
        the same person&apos;s shoulders.
      </p>

      <p>
        The reason is simple: <strong>succession is treated as a legal document
        when it&apos;s actually a leadership development process.</strong> You
        cannot draft your way to readiness.
      </p>

      <p>
        After two decades inside family businesses — and after watching the
        succession plans that worked and the ones that quietly collapsed —
        we&apos;ve learned something obvious in hindsight: the paperwork is the
        easiest part. The people are the hard part.
      </p>

      <h2>Why succession is a people problem</h2>

      <p>
        A buy-sell agreement doesn&apos;t make anyone ready to lead. A
        shareholder agreement doesn&apos;t resolve a family&apos;s conflict. A
        trust doesn&apos;t teach a next-generation owner how to run a P&amp;L.
        These documents protect a transition — they do not create one.
      </p>

      <p>What actually transfers a business to the next generation is three things:</p>

      <ol>
        <li>
          <strong>Capability</strong> — the next owner has run the operation,
          not just observed it.
        </li>
        <li>
          <strong>Authority</strong> — the current owner has visibly stepped
          back and let decisions land elsewhere.
        </li>
        <li>
          <strong>Alignment</strong> — the family has agreed, out loud, on
          roles and governance.
        </li>
      </ol>

      <p>
        When any of those three is missing, the paperwork doesn&apos;t hold.
        We&apos;ve seen families with perfectly drafted succession plans where
        the founder still signs every check at age 78. The documents aren&apos;t
        the problem. The readiness is.
      </p>

      <h2>The three-stage framework</h2>

      <p>
        There&apos;s no magic formula, but there is a sequence that works.
      </p>

      <h3>Stage 1 — Identify (Year 1)</h3>
      <p>
        Who is actually ready, or capable of becoming ready, to lead? This
        isn&apos;t a birth-order question — it&apos;s a skills-and-will
        question. The person who wants the business may not be the person who
        should run it. The person who should run it may not realize they&apos;re
        the one. Start with an honest, outside-facilitated conversation. Then
        sketch development plans for each viable candidate.
      </p>

      <h3>Stage 2 — Develop (Years 1–2)</h3>
      <p>
        The next leader needs to make real decisions and live with the
        consequences. This means a rotation through operations, sales, and
        finance — not a courtesy seat at leadership meetings. Give them P&amp;L
        responsibility for something that matters. Let them hire. Let them
        fire. Let them fail, within bounds. Development happens through
        authority transferred, not through titles printed.
      </p>

      <h3>Stage 3 — Transition (Year 2+)</h3>
      <p>
        This is where the documents finally get signed. The current owner
        reduces involvement in progressive stages: from daily operations, to
        weekly strategy, to quarterly board meetings, to an advisory role. The
        successor signs the contracts. The successor hires the executives. The
        successor becomes, operationally and psychologically, the person
        running the business.
      </p>

      <h2>The common mistakes</h2>

      <p>
        After seeing dozens of these plans play out, the same five mistakes
        show up again and again:
      </p>

      <ol>
        <li>
          <strong>Waiting too long.</strong> By the time most owners start
          planning, they&apos;re five years behind where they should be. A
          healthy succession takes 5–10 years, not 5–10 months.
        </li>
        <li>
          <strong>Choosing by birth order.</strong> The oldest child is not
          automatically the right CEO. Sometimes they&apos;re exactly the right
          CEO. Sometimes they&apos;re not. Don&apos;t let default assumptions
          make the choice.
        </li>
        <li>
          <strong>Skipping the outside perspective.</strong> Families
          can&apos;t fully see themselves. An advisor — family business
          specialist, peer-advisory group, outside board member — catches what
          everyone inside the room has stopped noticing.
        </li>
        <li>
          <strong>Confusing ownership with leadership.</strong> Two different
          questions. Ownership is about stock. Leadership is about running the
          company. A successor can inherit shares without inheriting the
          corner office, and vice versa. Plan for each separately.
        </li>
        <li>
          <strong>No communication plan for employees.</strong> Long-time
          employees need to hear the succession plan from the owner, not
          through rumor. A month of deliberate communication saves a year of
          quiet attrition.
        </li>
      </ol>

      <h2>What a 24-month timeline actually looks like</h2>

      <ul>
        <li>
          <strong>Months 1–3:</strong> Outside facilitator, family conversation,
          identify candidates, draft development plans.
        </li>
        <li>
          <strong>Months 4–9:</strong> Successor rotates through key functions
          with P&amp;L responsibility. Founder is still operationally active
          but begins pulling back from tactical decisions.
        </li>
        <li>
          <strong>Months 10–15:</strong> Successor takes lead on major
          operational decisions. Founder shifts to strategic advisor. Legal
          documents drafted in parallel.
        </li>
        <li>
          <strong>Months 16–21:</strong> Successor in role. Founder in
          board/advisor capacity. Employees, customers, and banking
          relationships re-anchored to successor.
        </li>
        <li>
          <strong>Months 22–24:</strong> Closing, document execution,
          celebratory announcement. Founder exits operationally.
        </li>
      </ul>

      <p>
        Not every family can move on this timeline. Some need longer. A few
        can move faster. But this is the shape of a transition that holds.
      </p>

      <h2>One more thing</h2>

      <p>
        The succession plans that work share one unglamorous trait: they
        started with a conversation the family had been avoiding. The family
        business that lasts isn&apos;t the one with the best lawyer — it&apos;s
        the one that was willing to sit in the hard questions long before the
        documents came out.
      </p>

      <p>
        If you&apos;re a founder reading this and thinking &ldquo;I should have
        started this three years ago&rdquo; — you&apos;re not alone, and you
        haven&apos;t missed your window. Start now. Then start the conversation
        with your family this month. If it would help to have an outside
        facilitator, that&apos;s one of the places our{" "}
        <Link href="/consulting">business consulting practice</Link> spends the
        most time.
      </p>
    </ArticleLayout>
  );
}
