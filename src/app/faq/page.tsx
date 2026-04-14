import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about BLE Training's corporate training, proctored testing, consulting services, and testing center locations.",
  alternates: { canonical: "/faq" },
};

const FAQS = [
  {
    category: "Corporate Training",
    questions: [
      {
        q: "What industries do you serve?",
        a: "We work across all industries — manufacturing, healthcare, financial services, technology, government, logistics, retail, and more. Every program is built around the client, not a vertical.",
      },
      {
        q: "Do you deliver training on-site or virtually?",
        a: "Both. We come to your location, deliver virtually, or use a blended approach. Whatever fits your team and schedule.",
      },
      {
        q: "How do you customize training for our company?",
        a: "We start with a conversation about your team, your challenges, and your goals. From there we design a program around your actual situation — not a pre-built curriculum.",
      },
      {
        q: "What's the minimum group size for a training engagement?",
        a: "We work with groups as small as 5 and as large as 500. We also offer one-to-one executive coaching. Call us and we'll figure out the right fit.",
      },
      {
        q: "How far in advance do we need to book?",
        a: "Typically 2-4 weeks for standard programs. For custom-designed engagements, we recommend 4-6 weeks. If you're in a rush, call us — we'll do what we can.",
      },
    ],
  },
  {
    category: "Proctored Testing",
    questions: [
      {
        q: "What testing providers do you work with?",
        a: "We deliver exams for Pearson VUE, Prometric, PSI, Meazure Learning, Kryterion, ETS, Scantron, and Examity.",
      },
      {
        q: "How do I register for an exam?",
        a: "You register directly through your testing provider's website (Pearson VUE, Prometric, etc.) and select a BLE Training center as your test location. Visit our Register page for direct links to all 8 providers.",
      },
      {
        q: "What should I bring on test day?",
        a: "Two forms of valid ID (one government-issued with photo), your confirmation email, and nothing else. Phones, smartwatches, and personal items go in our secure lockers before you enter the testing room.",
      },
      {
        q: "How early should I arrive?",
        a: "Plan to arrive 30 minutes before your scheduled exam. This gives time for check-in, ID verification, and locker storage without rushing your start time.",
      },
      {
        q: "Are your testing centers ADA-accessible?",
        a: "Yes. All six of our testing centers are fully ADA-accessible with wheelchair access and on-site parking. If you need special accommodations, contact us in advance and we'll make arrangements.",
      },
    ],
  },
  {
    category: "Consulting",
    questions: [
      {
        q: "What kind of businesses do you consult with?",
        a: "We specialize in small and mid-sized businesses, with a particular focus on family-owned and founder-led companies. We also work with larger enterprises on specific training and growth challenges.",
      },
      {
        q: "What does a typical consulting engagement look like?",
        a: "It usually starts with a 30-minute call. If there's a fit, we scope a project around the specific problem you're trying to solve — whether that's succession planning, growth strategy, or operational improvements.",
      },
      {
        q: "How much does consulting cost?",
        a: "Every engagement is scoped differently. We don't charge by the hour with a big retainer. We scope the work to fit the problem and give you a clear price upfront. Call us for a conversation — no obligation.",
      },
    ],
  },
  {
    category: "General",
    questions: [
      {
        q: "Where are your locations?",
        a: "We have six testing centers: Tyler TX, Clarks Summit PA, Toledo OH, Lincoln NE, Omaha NE, and Topeka KS. Visit our Locations page for addresses, hours, and directions.",
      },
      {
        q: "How do I get in touch?",
        a: "Call us toll-free at 1-877-879-2531 (1-877-TRY-BLE-1), email info@ble.training, or use the contact form on our website. We respond within one business day.",
      },
      {
        q: "Do you offer Red Cross BLS/CPR/First Aid training?",
        a: "Yes. We offer American Red Cross Basic Life Support, First Aid, and CPR classes at select locations. Visit the Red Cross website to register for an upcoming class at a BLE Training center.",
      },
      {
        q: "How long has BLE Training been in business?",
        a: "BLE Training was founded in 2007. We've been serving businesses and certification candidates for nearly 20 years.",
      },
    ],
  },
];

export default function FAQPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.flatMap((cat) =>
      cat.questions.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 pt-14 pb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            FAQ
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-black">
            Frequently Asked Questions
          </h1>
          <div className="mx-auto mt-6 h-1 w-24 bg-crimson" />
          <p className="mt-6 text-lg text-black/70 max-w-2xl mx-auto">
            Quick answers to the questions we hear most. Can&apos;t find what
            you&apos;re looking for? Give us a call.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20">
          {FAQS.map((cat) => (
            <AnimateOnScroll key={cat.category}>
              <div className="mb-16">
                <h2 className="font-serif text-2xl text-black border-b-2 border-crimson pb-3 mb-6">
                  {cat.category}
                </h2>
                <div className="space-y-6">
                  {cat.questions.map((faq) => (
                    <div key={faq.q} className="border-b border-slate-200 pb-6">
                      <h3 className="font-serif text-lg text-black">
                        {faq.q}
                      </h3>
                      <p className="mt-2 text-black/70 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}

          <AnimateOnScroll>
            <div className="bg-black text-white p-10 md:p-14 text-center border-t-4 border-crimson">
              <h2 className="font-serif text-3xl text-white">
                Still have questions?
              </h2>
              <p className="mt-3 text-white/70">
                We&apos;re happy to help. Call us or send a message.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+18778792531"
                  className="inline-flex items-center gap-2 bg-crimson px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-soft transition-colors"
                >
                  Call 1-877-879-2531
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:border-white hover:bg-white/10 transition-colors"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
