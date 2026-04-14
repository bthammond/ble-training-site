import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | BLE Training",
  description: "How BLE Training uses cookies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-crimson">Legal</span>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl text-black">Cookie Policy</h1>
        <div className="mt-6 h-1 w-24 bg-crimson" />
        <p className="mt-4 text-sm text-black/50">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-black/80 leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl text-black">What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you use it.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Cookies We Use</h2>
            <div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-left">
                    <th className="px-4 py-3 font-bold text-black">Cookie</th>
                    <th className="px-4 py-3 font-bold text-black">Purpose</th>
                    <th className="px-4 py-3 font-bold text-black">Duration</th>
                    <th className="px-4 py-3 font-bold text-black">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">ble_cookie_consent</td>
                    <td className="px-4 py-3">Remembers your cookie consent preference</td>
                    <td className="px-4 py-3">1 year</td>
                    <td className="px-4 py-3">Necessary</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">ble_catalog_access</td>
                    <td className="px-4 py-3">Grants access to the full course catalog after registration</td>
                    <td className="px-4 py-3">30 days</td>
                    <td className="px-4 py-3">Functional</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">_ga, _ga_*</td>
                    <td className="px-4 py-3">Google Analytics — tracks anonymous usage data (pages visited, time on site)</td>
                    <td className="px-4 py-3">2 years</td>
                    <td className="px-4 py-3">Analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Your Choices</h2>
            <p>When you first visit our site, a cookie consent banner gives you the option to accept or decline non-essential cookies. If you decline:</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" /><span>Google Analytics will be disabled for your session</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" /><span>Essential cookies (consent preference) will still be set</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" /><span>The course catalog access cookie will still function if you register</span></li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Managing Cookies in Your Browser</h2>
            <p>You can also control cookies through your browser settings. Most browsers allow you to block or delete cookies. Note that disabling cookies may affect how some parts of our website function.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-black">Contact</h2>
            <p>Questions about our cookie practices? Contact us at <a href="mailto:info@ble.training" className="text-crimson hover:text-crimson-soft">info@ble.training</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
