import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BLE Training",
  description: "BLE Training privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">Legal</span>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl text-black">Privacy Policy</h1>
        <div className="mt-6 h-1 w-24 bg-crimson" />
        <p className="mt-4 text-sm text-black/50">Last updated: April 2026</p>

        <div className="mt-10 prose prose-lg prose-black max-w-none space-y-8 text-black/80 leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl text-black">Information We Collect</h2>
            <p>When you use our website, fill out a contact form, register for our course catalog, or schedule a test, we may collect your name, email address, phone number, company name, and any other information you voluntarily provide.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">How We Use Your Information</h2>
            <p>We use the information you provide to respond to your inquiries, schedule consultations, deliver training services, process exam registrations, and send you relevant updates about our services. We do not sell your personal information to third parties.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Cookies &amp; Analytics</h2>
            <p>We use Google Analytics to understand how visitors interact with our website. This service uses cookies to collect anonymous usage data such as pages visited, time on site, and referral sources. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Data Security</h2>
            <p>We take reasonable measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Third-Party Services</h2>
            <p>Our website may contain links to third-party websites such as testing partner registration portals (Pearson VUE, Prometric, PSI, etc.) and the American Red Cross. We are not responsible for the privacy practices of these external sites.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at <a href="mailto:info@ble.training" className="text-crimson hover:text-crimson-soft">info@ble.training</a> or calling <a href="tel:+18778792531" className="text-crimson hover:text-crimson-soft">1-877-879-2531</a>.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Data Retention</h2>
            <p>We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, provide our services, or comply with legal obligations. Contact form submissions and lead data are retained for up to 24 months. You may request deletion at any time.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">California Privacy Rights (CCPA)</h2>
            <p>If you are a California resident, you have the right to: know what personal information we collect about you, request deletion of your personal information, opt out of the sale of your personal information (we do not sell personal information), and not be discriminated against for exercising your privacy rights. To exercise these rights, contact us at <a href="mailto:info@ble.training" className="text-crimson hover:text-crimson-soft">info@ble.training</a>.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Children&apos;s Privacy</h2>
            <p>Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete it promptly.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Do Not Track</h2>
            <p>Our website does not currently respond to &ldquo;Do Not Track&rdquo; browser signals. However, you can opt out of analytics tracking by declining cookies when the consent banner appears, or by using the Google Analytics Opt-out Browser Add-on.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Contact</h2>
            <p>If you have questions about this privacy policy, contact us at <a href="mailto:info@ble.training" className="text-crimson hover:text-crimson-soft">info@ble.training</a> or call <a href="tel:+18778792531" className="text-crimson hover:text-crimson-soft">1-877-879-2531</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
