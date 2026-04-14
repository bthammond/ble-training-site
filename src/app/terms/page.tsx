import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | BLE Training",
  description: "BLE Training terms of service — the terms governing use of our website and services.",
};

export default function TermsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">Legal</span>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl text-black">Terms of Service</h1>
        <div className="mt-6 h-1 w-24 bg-crimson" />
        <p className="mt-4 text-sm text-black/50">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-black/80 leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl text-black">Acceptance of Terms</h2>
            <p>By accessing and using the BLE Training website (bletraining.com), you agree to be bound by these Terms of Service. If you do not agree, please do not use the site.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Services</h2>
            <p>BLE Training provides corporate training, proctored testing, and business consulting services. The information on this website is for general informational purposes. Specific service terms are outlined in individual client agreements.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, course materials, and the course catalog, is the property of BLE Training and is protected by copyright law. You may not reproduce, distribute, or download any content without written permission.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Testing Services</h2>
            <p>BLE Training operates as a test delivery center for third-party certification providers. Exam content, scoring, and certification decisions are made by the respective testing partners (Pearson VUE, Prometric, PSI, etc.), not by BLE Training.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Limitation of Liability</h2>
            <p>BLE Training is not liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability shall not exceed the amount paid for the specific service in question.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Governing Law</h2>
            <p>These terms are governed by the laws of the Commonwealth of Pennsylvania, without regard to conflict of law principles.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Contact</h2>
            <p>Questions about these terms? Contact us at <a href="mailto:info@ble.training" className="text-crimson hover:text-crimson-soft">info@ble.training</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
