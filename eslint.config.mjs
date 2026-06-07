import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Project-level rule overrides.
  {
    rules: {
      // react-hooks v6's "Calling setState synchronously within an effect"
      // rule fires on a legitimate pattern this codebase uses: read a
      // user-environment value (prefers-reduced-motion, IntersectionObserver,
      // current time) in useEffect and setState to reveal the result on
      // first client render. The "cascading renders" concern doesn't apply —
      // these effects run once and the state never re-triggers. Downgrade
      // to warn so the lint pass stays green while still flagging new
      // occurrences for review.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
]);

export default eslintConfig;
