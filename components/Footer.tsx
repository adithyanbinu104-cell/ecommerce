import Link from "next/link";
import { WHATSAPP_DISPLAY, buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] mt-space-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
          <div className="flex flex-col gap-space-sm">
            <h3 className="font-headline-sm text-headline-sm uppercase tracking-[0.2em] text-primary">
              L&apos;ATELIER VELORA
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Conceived with architectural rigor and timeless poise. Velora crafts
              haute couture and ready-to-wear silhouettes honoring Parisian
              sartorial provenance and serene modernism.
            </p>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary mt-space-xs">
              PARIS - MILAN - NEW YORK
            </span>
          </div>
          <div className="flex flex-col gap-space-sm">
            <h3 className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary font-bold">
              CONCIERGE SERVICES
            </h3>
            <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface-variant">
              <li>
                <Link href="/products" className="hover:text-on-surface transition-colors">
                  Client Care &amp; Private Advisor
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-on-surface transition-colors">
                  Complimentary Courier &amp; Returns
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-on-surface transition-colors">
                  Private Salon Appointments
                </Link>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl("Hello VELORA, I would like styling advice.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-surface transition-colors flex items-center gap-1.5 pt-1"
                >
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    chat
                  </span>
                  <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-space-sm">
            <h3 className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary font-bold">
              MAISON LINKS
            </h3>
            <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface-variant">
              <li>
                <Link href="/" className="hover:text-on-surface transition-colors">
                  About VELORA
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-on-surface transition-colors">
                  Sustainability &amp; Traceability
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-on-surface transition-colors">
                  Press, Editions &amp; Archives
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-on-surface transition-colors">
                  Terms, Privacy &amp; Ethics
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-space-sm">
            <h3 className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary font-bold">
              THE CURATED JOURNAL
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Receive couture previews, private salon invitations, and archival
              releases.
            </p>
            <form className="flex flex-col gap-space-xs pt-1">
              <div className="relative flex items-center bg-surface-container-highest px-3 py-2">
                <input
                  className="w-full bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none"
                  placeholder="Enter your correspondence email"
                  type="email"
                />
                <button
                  aria-label="Subscribe"
                  className="ml-2 text-primary hover:text-secondary transition-colors"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                Discreet correspondence. Unsubscribe at leisure.
              </span>
            </form>
          </div>
        </div>
        <div className="pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-md text-on-surface-variant text-body-sm font-body-sm">
          <p className="tracking-wide">(c) VELORA MAISON 2025. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-space-md">
            <span className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant/80">
              VISA
            </span>
            <span className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant/80">
              MASTERCARD
            </span>
            <span className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant/80">
              AMEX
            </span>
            <span className="font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant/80">
              APPLE PAY
            </span>
          </div>
          <div className="flex items-center gap-space-sm">
            <a
              href="#"
              className="hover:text-on-surface transition-colors font-label-sm text-label-sm uppercase tracking-widest"
            >
              Instagram
            </a>
            <span className="text-outline-variant">-</span>
            <a
              href="#"
              className="hover:text-on-surface transition-colors font-label-sm text-label-sm uppercase tracking-widest"
            >
              Pinterest
            </a>
            <span className="text-outline-variant">-</span>
            <a
              href="#"
              className="hover:text-on-surface transition-colors font-label-sm text-label-sm uppercase tracking-widest"
            >
              Vogue Runway
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
