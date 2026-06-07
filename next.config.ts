import type { NextConfig } from "next";

/**
 * Content-Security-Policy (report-only).
 *
 * Shipped as Report-Only first to discover real violations without
 * breaking the live site. Plan:
 *
 *   1. Land report-only header (this commit).
 *   2. Watch /api/csp-report for ~7 days; tighten / loosen sources
 *      based on real violations seen in production.
 *   3. Flip from Report-Only to enforcing by switching the header
 *      key to "Content-Security-Policy" and removing `unsafe-inline`
 *      / `unsafe-eval` where Next.js + GA telemetry don't actually
 *      need them.
 *
 * Notes on each directive:
 *   - script-src includes 'unsafe-inline'/'unsafe-eval' because
 *     Next.js hydration uses inline scripts and GA4 evaluates
 *     dynamic strings. Migrate to nonce-based CSP later.
 *   - style-src includes 'unsafe-inline' for Tailwind / shadcn
 *     inline classnames.
 *   - connect-src whitelists GA's collection endpoints + the
 *     site's own origin (chat + subscribe).
 *   - frame-ancestors 'none' prevents clickjacking.
 *   - form-action 'self' blocks form re-targeting attacks.
 *   - object-src 'none' kills Flash-era plugin vectors.
 */
const cspReportOnly = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.vercel.app",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://stats.g.doubleclick.net https://api.anthropic.com",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "report-uri /api/csp-report",
].join("; ");

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self)",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    // Report-only — does NOT block, only reports. Flip the key to
    // "Content-Security-Policy" once /api/csp-report shows the
    // violation set has stabilized.
    key: "Content-Security-Policy-Report-Only",
    value: cspReportOnly,
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // /blog was a stub route nobody linked to internally. Everything
      // ships under /insights now. 308 preserves any external links and
      // cached search results pointing at the old path.
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog/:path*", destination: "/insights", permanent: true },
      // Intuitive alternative paths
      { source: "/business-consulting", destination: "/consulting", permanent: true },
      { source: "/testing-centers", destination: "/locations", permanent: true },
      { source: "/testing", destination: "/locations", permanent: true },
      { source: "/courses", destination: "https://learning.ble.training/store", permanent: true },
    ];
  },
};

export default nextConfig;
