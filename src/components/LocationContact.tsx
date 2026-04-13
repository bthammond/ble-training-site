import { Phone } from "lucide-react";
import { CONTACT, telHrefWithExt } from "@/lib/locations";

/**
 * Click-to-call line with the shared toll-free number and this
 * location's direct extension. Solid black text, bold extension.
 * Place this directly under the address and above the hours block.
 */
export default function LocationContact({ extension }: { extension: string }) {
  return (
    <p className="mt-3 flex items-center gap-2 text-sm">
      <Phone className="h-4 w-4 shrink-0 text-crimson" />
      <a
        href={telHrefWithExt(extension)}
        className="text-black hover:text-crimson transition-colors"
      >
        <span>{CONTACT.tollFreeDisplay}</span>
        <span className="mx-2 text-black/40">·</span>
        <span>Ext:</span>{" "}
        <span className="font-bold">{extension}</span>
      </a>
    </p>
  );
}
