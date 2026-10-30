"use client";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const heroImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDtcGb4O43PdfTynU2SEkP7Xm-jjvlOeVuBEgtFD2lITWn2K2YYZ1zL-UMiRXKxnODMUU0jgo8kWGJ89ja8cgK90iRylpGvb88ovm22iCnd44ImX77T3wbenrvE1LI-yQR-4kqu1NV9idyUDbyCRj0yLtaNLE35rByq141bJ8Yxt6-0AhmQ9V6Yfj3KrdHJf7K3DkeQ_Cj5GZwKLY2QAqwZod5laX5J_Nv-wfOBOnw";

const categories = [
  {
    title: "Men's Wear",
    edition: "EDITION 01",
    href: "/products?category=Men",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvZm44vaNr_1iTSa7El6HTICN94Hh-iBZgr3IUlO3DlhKQ52uZ1dvTpc9P37eM9Di6UWBLi3qWGJ9v12p45TbOwtkIwxfTQPePd8vYElcgXXFMVHYw3AKi_o85d2kr09GHxz6ioACCaHL0a877lJ0SzB1RhWg5jO3zawKYjktR0SWXr02tY3cUk6XyrllpYcq3xTuUJzmduEryk_nRxAiO2kc4tz2IWtiDKJwcw6U",
  },
  {
    title: "Women's Wear",
    edition: "EDITION 02",
    href: "/products?category=Women",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9blN8HZuWKSTtv8UB2S-9DHJl-rwm6V4xldG0i1bD_VwxPo45c0mXrsWRiKmXZnp2awJll5S8Czh_bIb-T3OsuQdcsqrHP63CZr4VtrTDKcl4gkvF0dynWqs3Lmsdu2IHGKYZxhf8u0WnJXq83d_3LQwE7GQoV9W1J-ZYZOO3OLCxq9DELxxUTWHq8W6nD3gXvXSR_NFbKOXa9-TVH4Rqf6wvqUOcT3nIo7lazIY",
  },
  {
    title: "Casual Luxe",
    edition: "EDITION 03",
    href: "/products?category=Collections",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAleJJTAwG5Apr2OrQ-NDzliLGELGiSvYcGAoGpD4cxKLt2BivyIGyzfBL2wZ3Arxx8WXOp9NK59KxBM9qdtvlCx8uwXlgt4z3y7TAV7CJKmqfqOmLueTNz-YluetcfKysUG3T9AY3d9c1hGsbmLfRRvhqhXGrfj8b1eUGDiyEgwovnPxGVeEEuybT9nmnHArbabHfnGg1d5VFG_w7c1yrWgnpbxa9lQSceKEJio4g",
  },
  {
    title: "Leather & Gear",
    edition: "EDITION 04",
    href: "/products?category=Accessories",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqtZD1zXVz-lg-EDONrmpFFR7VnzmbjnY9iWbK6gZTGXLinc9JkbKOvsDGVHPRtqXMY1u-e3bsoeYsh-JZH3hCJZymDQMmwnxsgBQU18SHDEf9nnQChtwfN8roxOqNErWRz6hN-trNnKxJ2-_1HHybMITzxSEu82dQPGT5IUXqf-NpIj3tVaWIwG99xGe4lHc6d81fev07RhQoh3UzGmlNnWh8tpZHrXfm_kJjRF8",
  },
];

export default function HomePage() {
  const arrivalFallback = products.filter((p) =>
    ["p1", "p2", "p3", "p4"].includes(p.id)
  );
  const trending = products.filter((p) =>
    ["p5", "p6", "p7", "p8"].includes(p.id)
  );

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative w-full -mt-28 min-h-[90vh] flex items-end pb-20 overflow-hidden bg-primary">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-85 scale-105 transition-transform duration-[10000ms] hover:scale-100"
          style={{ backgroundImage: `url('${heroImg}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/40" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-36">
          <div className="max-w-2xl flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-secondary-fixed" />
              <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-secondary-fixed">
                AUTUMN / WINTER MMXXV
              </span>
            </div>
            <h1 className="font-display-xl text-display-xl text-on-primary uppercase leading-tight tracking-tight">
              Style That Defines You
            </h1>
            <p className="font-body-lg text-body-lg text-inverse-on-surface/90 max-w-xl font-light leading-relaxed">
              Timeless tailoring and modern silhouettes crafted from sustainable
              Italian textiles, engineered for enduring poise and architectural
              silhouette.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/products?category=Men"
                className="px-8 py-4 bg-on-primary text-primary font-label-lg text-label-lg uppercase tracking-[0.2em] shadow-lg hover:bg-surface-variant transition-all text-center"
              >
                Shop Men
              </Link>
              <Link
                href="/products?category=Women"
                className="px-8 py-4 bg-primary/70 backdrop-blur-md text-on-primary font-label-lg text-label-lg uppercase tracking-[0.2em] shadow-lg hover:bg-primary transition-all text-center"
              >
                Shop Women
              </Link>
            </div>
          </div>
          <div className="mt-16 pt-8 flex items-center justify-between text-on-primary/70 text-body-sm font-body-sm">
            <div className="flex items-center gap-8">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary">
                ATELIER N 48
              </span>
              <span className="hidden md:inline">-</span>
              <span className="hidden md:inline text-inverse-on-surface/70">
                Bespoke Mill Provenance: Biella &amp; Como, Italy
              </span>
            </div>
            <div className="flex items-center gap-2 text-on-primary">
              <span className="font-label-sm text-label-sm uppercase tracking-widest">
                SCROLL TO DISCOVER
              </span>
              <span className="material-symbols-outlined text-[16px] animate-bounce">
                arrow_downward
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="w-full bg-surface-container-high py-3 overflow-hidden select-none">
        <div className="flex items-center gap-12 whitespace-nowrap text-on-surface-variant font-label-sm text-label-sm tracking-[0.24em] uppercase">
          <span>MADE IN FLORENCE &amp; COMO</span>
          <span>-</span>
          <span>COMPLIMENTARY EXPRESS WORLDWIDE COURIER</span>
          <span>-</span>
          <span>ORGANIC MULBERRY SILK &amp; ARCHIVAL CASHMERE</span>
          <span>-</span>
          <span>PRIVATE ATELIER FITTINGS UPON REQUEST</span>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary">
              CURATED SELECTIONS
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-primary mt-1">
              Disciplined Forms
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Four fundamental pillars of the modern wardrobe. Every garment is
            conceived to move gracefully between ceremonial and everyday life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group relative flex flex-col overflow-hidden bg-surface-container-low shadow-sm"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${c.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-on-primary">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary-fixed">
                      {c.edition}
                    </span>
                    <h3 className="font-headline-md text-headline-md tracking-wide mt-1">
                      {c.title}
                    </h3>
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    EXPLORE{" "}
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="w-full bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-secondary">
                NEW ARRIVALS - COUTURE S/S PREVIEW
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase text-primary mt-1">
                Acquired Masterpieces
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/products?sort=new"
                className="px-5 py-2.5 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest shadow-sm"
              >
                All Items
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {arrivalFallback.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo banner */}
      <section className="relative w-full bg-primary text-on-primary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDR-aSXcKgEHtgKSRyBaCl6ZPf24aYsGP4dJmORipSXD31iljc4rJamae0TStCgZwNOXs67Ipi9PJ0Wrk3CaMB8W8fAcq0cRqce6HXE6gAx_cPvlS1G7PXuZWLuT1ZLNeqKTqRgZOQaiifwylrOdWJ7eLShPlTlab0bl58jEGdB6VTfL3HVykYICb5j_fyHbKlOXJW8hxYutl2Vw2HHK8Ll85L11ulZtDNe2uILdwc')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl flex flex-col gap-4 text-left">
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-secondary-fixed" />
              <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-secondary-fixed">
                PRIVATE SALON INVITATION
              </span>
            </div>
            <h2 className="font-display-xl text-display-xl tracking-tight uppercase">
              La Maison Édition
            </h2>
            <p className="font-body-lg text-body-lg text-inverse-on-surface/85 font-light leading-relaxed">
              Access our locked retrospective vault. Thirty selected archival
              pieces from previous Milan runway showcases, re-released in severely
              limited yardage.
            </p>
            <div className="pt-2">
              <Link
                href="/products?category=Collections"
                className="inline-flex items-center gap-3 px-8 py-4 bg-on-primary text-primary font-label-lg text-label-lg uppercase tracking-[0.2em] shadow-md hover:bg-surface-variant transition-colors"
              >
                <span>Discover Archive</span>
                <span className="material-symbols-outlined text-[16px]">
                  north_east
                </span>
              </Link>
            </div>
          </div>
          <div className="bg-surface/10 backdrop-blur-xl p-8 max-w-md w-full shadow-2xl flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary-fixed">
                ARCHIVE CLOSURE IN
              </span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-fixed" />
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-primary/40 p-4 flex flex-col">
                <span className="font-display-xl text-display-xl text-on-primary font-light tracking-normal leading-none">
                  02
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-inverse-on-surface/60 mt-2">
                  Days
                </span>
              </div>
              <div className="bg-primary/40 p-4 flex flex-col">
                <span className="font-display-xl text-display-xl text-on-primary font-light tracking-normal leading-none">
                  14
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-inverse-on-surface/60 mt-2">
                  Hours
                </span>
              </div>
              <div className="bg-primary/40 p-4 flex flex-col">
                <span className="font-display-xl text-display-xl text-on-primary font-light tracking-normal leading-none">
                  38
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-inverse-on-surface/60 mt-2">
                  Mins
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary">
              WARM MODERNISM
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-primary mt-1">
              Trending In The Salons
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trending.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Brand pillars */}
      <section className="w-full bg-surface-container-high py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-secondary">
              OUR GUARANTEE
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-primary mt-1">
              Uncompromising Luxury
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Every touchpoint is calibrated for absolute peace of mind, from
              initial atelier fitting to doorstep arrival.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "local_shipping",
                title: "Complimentary Delivery",
                text: "Express worldwide courier in signature bonded archival boxes.",
              },
              {
                icon: "published_with_changes",
                title: "Concierge Returns",
                text: "Generous 30-day doorstep collection, handled seamlessly.",
              },
              {
                icon: "verified_user",
                title: "Encrypted Security",
                text: "Discrete multi-layer transaction encryption.",
              },
              {
                icon: "handshake",
                title: "Artisanal Direct Advice",
                text: "Connect with our live stylist concierge for sizing and curation.",
                concierge: true,
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className={`p-8 shadow-sm flex flex-col items-start gap-4 ${
                  pillar.concierge
                    ? "bg-primary text-on-primary justify-between"
                    : "bg-surface"
                }`}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center ${
                    pillar.concierge
                      ? "bg-on-primary/10 text-on-primary"
                      : "bg-surface-container-low text-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {pillar.icon}
                  </span>
                </div>
                <h3
                  className={`font-title-md text-title-md font-serif ${
                    pillar.concierge ? "text-on-primary" : "text-primary"
                  }`}
                >
                  {pillar.title}
                </h3>
                <p
                  className={`font-body-sm text-body-sm leading-relaxed ${
                    pillar.concierge
                      ? "text-inverse-on-surface/80"
                      : "text-on-surface-variant"
                  }`}
                >
                  {pillar.text}
                </p>
                {pillar.concierge && (
                  <a
                    href={buildWhatsAppUrl(
                      "Hello VELORA, I would like styling and sizing advice."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-2 py-3 px-4 bg-secondary text-on-secondary font-label-sm text-label-sm uppercase tracking-[0.2em] text-center hover:bg-secondary-container transition-colors"
                  >
                    WhatsApp Stylist
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP banner */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="relative bg-surface-container-low p-10 md:p-16 overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="absolute -right-12 -bottom-16 select-none opacity-5 text-primary pointer-events-none font-headline-lg text-[220px] font-serif leading-none">
            V
          </div>
          <div className="max-w-xl flex flex-col gap-3 z-10">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-secondary">
              THE PRIVATE REGISTRY
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-primary">
              Join La Maison VELORA
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Receive confidential salon previews, private bespoke runway
              invitations, and rare access to archive fabric re-editions before
              public release.
            </p>
          </div>
          <div className="w-full md:max-w-md z-10">
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Bienvenue. Your private invitation is confirmed.");
              }}
            >
              <div className="flex flex-col sm:flex-row items-stretch gap-2">
                <input
                  className="flex-1 bg-surface px-4 py-3.5 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-sm"
                  placeholder="Enter your confidential email..."
                  required
                  type="email"
                />
                <button
                  className="px-6 py-3.5 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-[0.2em] hover:bg-secondary transition-colors whitespace-nowrap shadow-sm"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
