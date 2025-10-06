// src/components/WhatsAppInit.tsx
"use client";

import { useEffect, useRef } from "react";
import { whatsappLink } from "@/lib/whatsapp";

// Default pool (round-robin) — replace later with real numbers if needed
const DEFAULT_NUMBERS = [
  "254748699460",  // Terry (KE)
  "32465603546",   // Joy (BE) - digits only, no +
];

export default function WhatsAppInit() {
  const rrIndex = useRef(0);

  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("a.wa-rr"));
    links.forEach((a) => {
      // Allow overrides via data-number or data-numbers (comma-separated)
      const single = a.getAttribute("data-number")?.trim();
      const listAttr = a.getAttribute("data-numbers")?.trim();
      const pool = single
        ? [single]
        : listAttr
        ? listAttr.split(",").map((x) => x.trim()).filter(Boolean)
        : DEFAULT_NUMBERS;

      // Compose message
      const msg = a.getAttribute("data-msg") || "Hi Tech24! I want a website.";
      const number = pool[rrIndex.current % pool.length];
      rrIndex.current += 1;

      a.href = whatsappLink(number, msg);
      a.target = "_blank";
      a.rel = "noreferrer";
    });
  }, []);

  return null;
}
