"use client";

import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      aria-label="WhatsApp Stylist Concierge"
      className="fixed bottom-8 right-8 z-40 bg-primary text-on-primary px-4 py-3 shadow-[0_1px_8px_rgba(0,0,0,0.04)] flex items-center gap-2.5 hover:bg-secondary transition-all group"
      href={buildWhatsAppUrl("Hello VELORA, I would like styling advice.")}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="material-symbols-outlined text-[20px] text-on-primary group-hover:scale-105 transition-transform">
        support_agent
      </span>
      <span className="font-label-sm text-label-sm tracking-[0.16em] uppercase text-on-primary hidden sm:inline">
        Stylist Concierge
      </span>
    </a>
  );
}
