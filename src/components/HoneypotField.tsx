"use client";

/**
 * Hidden honeypot input. Real humans never see it (CSS-positioned
 * off-screen) and never tab into it (tabIndex=-1). Bots that walk
 * the DOM and fill every input will populate `website`, and the
 * /api/subscribe handler treats any non-empty value as silent
 * spam → returns a fake success.
 *
 * Use as a controlled input so the parent's submit can read the
 * value and include it in the JSON body. For FormData-based forms,
 * the input's `name="website"` is enough; pass `controlled={false}`
 * and FormData picks it up automatically.
 */
export default function HoneypotField({
  value,
  onChange,
  controlled = true,
}: {
  value?: string;
  onChange?: (v: string) => void;
  controlled?: boolean;
}) {
  const sharedProps = {
    type: "text" as const,
    name: "website",
    tabIndex: -1,
    autoComplete: "off",
    "aria-hidden": "true" as const,
    style: {
      position: "absolute" as const,
      left: "-9999px",
      width: 1,
      height: 1,
      opacity: 0,
      pointerEvents: "none" as const,
    },
  };
  if (controlled) {
    return (
      <input
        {...sharedProps}
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
      />
    );
  }
  return <input {...sharedProps} defaultValue="" />;
}
