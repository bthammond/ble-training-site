# Image Pack — Pending Replacements

When the BLE Training custom image pack (referenced in the marketing audit)
is delivered, drop the files into `/public/` and update the following
locations. Until then, the existing branded images below serve their purpose.

| Audit image file | Current placeholder in use | Location to update |
|---|---|---|
| `ble-hero-main.jpg` | `home-hero.png` | `src/components/Hero.tsx` |
| `ble-testing-center.jpg` | *(none — Testing page uses section graphics)* | `src/app/testing/page.tsx` hero |
| `ble-training-session.jpg` | *(none)* | `src/app/how-we-work/page.tsx` hero + `src/app/why-ble/page.tsx` |
| `ble-family-business.jpg` | *(none — Consulting page uses radial gradient)* | `src/app/consulting/page.tsx` hero |
| `article-succession-plan.jpg` | *(none)* | `src/app/insights/family-business-succession-guide/page.tsx` |
| `article-manager-training.jpg` | *(none)* | `src/app/insights/why-best-performers-make-worst-managers/page.tsx` |
| `article-pearson-vue.jpg` | *(none)* | `src/app/insights/what-to-expect-pearson-vue-testing-center/page.tsx` |
| `article-leadership-gap.jpg` | *(none)* | `src/app/insights/real-cost-of-leadership-gap/page.tsx` |
| `article-onboarding.jpg` | *(none)* | `src/app/insights/onboarding-process-costing-you-people/page.tsx` |
| `ble-logo-v2.png` | `BLE-Training---black-letters.png` + `BLE-Training---white-letters.png` | `src/components/Header.tsx` + `src/components/Footer.tsx` |

## Image QA already in place

- All site images use `next/image` (no raw `<img>` tags) → automatic
  lazy-loading, explicit width/height (enforced), CLS protection,
  AVIF/WebP output, responsive srcset
- Hero images use `priority` prop → auto-preload on LCP
- Descriptive `alt` text on every image (logos, headshots, partner logos,
  location maps, etc.)
