// ============================================================
// Replace with the business number in international format (digits only).
export const WHATSAPP_NUMBER = "PHONE_NUMBER";

export const WHATSAPP_DISPLAY = "PHONE_NUMBER (configure in lib/whatsapp.ts)";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string) {
  if (typeof window === "undefined") return;
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
