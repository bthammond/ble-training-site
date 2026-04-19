import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | BLE Training",
  description: "BLE Training is committed to making our website accessible to all visitors.",
  alternates: { canonical: "/accessibility-statement" },
};

export default function AccessibilityPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">Commitment</span>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl text-black">Accessibility Statement</h1>
        <div className="mt-6 h-1 w-24 bg-crimson" />
        <p className="mt-4 text-sm text-black/50">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-black/80 leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl text-black">Our Commitment</h2>
            <p>BLE Training is committed to ensuring our website is accessible to people with disabilities. We strive to meet or exceed the requirements of the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">What We Do</h2>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" /><span>Use semantic HTML to ensure proper document structure</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" /><span>Provide alt text for all meaningful images</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" /><span>Ensure sufficient color contrast throughout the site</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" /><span>Support keyboard navigation for all interactive elements</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" /><span>Design responsive layouts that work on all screen sizes</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" /><span>Maintain ADA-accessible facilities at all six testing centers</span></li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Testing Center Accessibility</h2>
            <p>All six BLE Training testing centers are ADA-accessible with wheelchair access, on-site parking, and staff available to assist with accommodation requests. If you need special accommodations for your exam, please contact us in advance.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Feedback</h2>
            <p>If you experience any difficulty accessing our website or need assistance, please contact us:</p>
            <ul className="mt-3 space-y-1">
              <li><strong>Email:</strong> <a href="mailto:info@ble.training" className="text-crimson hover:text-crimson-soft">info@ble.training</a></li>
              <li><strong>Phone:</strong> <a href="tel:+18778792531" className="text-crimson hover:text-crimson-soft">1-877-879-2531</a></li>
            </ul>
            <p className="mt-3">We take accessibility feedback seriously and will work to resolve any issues promptly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
