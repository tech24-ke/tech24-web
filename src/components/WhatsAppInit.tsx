"use client";
import { useEffect, useRef } from "react";

// Default round-robin pool (you can change/order anytime)
const DEFAULT_NUMBERS = ["254748699460", "32465603546"];

function buildLink(number: string, text?: string) {
  const n = number.replace(/\D/g, "");
  const msg = text ? encodeURIComponent(text) : "";
  return `https://wa.me/${n}${msg ? `?text=${msg}` : ""}`;
}

export default function WhatsAppInit() {
  const rr = useRef(0);

  useEffect(() => {
    const wireAll = () => {
      const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("a.wa-rr"));
      links.forEach((a) => {
        const single = a.getAttribute("data-wa")?.trim();
        const poolAttr = a.getAttribute("data-numbers")?.trim();
        const pool = single
          ? [single]
          : poolAttr
          ? poolAttr.split(",").map((x) => x.trim()).filter(Boolean)
          : DEFAULT_NUMBERS;

        const idx = rr.current++ % pool.length;
        const msg = a.getAttribute("data-msg") || `Hi Tech24!`;
        a.href = buildLink(pool[idx], msg);
        a.target = "_blank";
        a.rel = "noreferrer";
      });
    };

    // Initial run
    wireAll();

    // Re-wire if new nodes appear (TemplateShowcase etc.)
    const mo = new MutationObserver(wireAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => mo.disconnect();
  }, []);

  return null;
}
