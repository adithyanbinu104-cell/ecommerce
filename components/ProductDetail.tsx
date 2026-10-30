"use client";

import { useState } from "react";
import { useWishlist } from "@/components/WishlistProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { openWhatsApp } from "@/lib/whatsapp";
import type { Product } from "@/lib/products";

export default function ProductDetail({ product }: { product: Product }) {
  const router = useRouter();
  const { addItem } = useCart();
  const [activeImg, setActiveImg] = useState(0);
  const [size, setSize] = useState(
    product.sizes.includes("M") ? "M" : product.sizes[0]
  );
  const [color, setColor] = useState(product.colors[0].name);
  const [quantity, setQuantity] = useState(1);
  const { isWished, toggle } = useWishlist();
  const wished = isWished(product.id);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[0],
      size,
      color,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[0],
      size,
      color,
      quantity,
    });
    router.push("/cart");
  };

  const handleWhatsAppBuy = () => {
    const message = `Hello VELORA, I would like to order:

Product: ${product.name}
Size: ${size}
Colour: ${color}
Quantity: ${quantity}
Price: $${product.price} each
Total: $${product.price * quantity}

Please confirm availability and delivery.`;
    openWhatsApp(message);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-[0.14em] text-on-surface-variant mb-8">
        <Link href="/" className="hover:text-on-surface">
          Home
        </Link>
        <span>/</span>
        <Link
          href={`/products?category=${encodeURIComponent(product.category)}`}
          className="hover:text-on-surface"
        >
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-on-surface">
          {product.category === "Women" ? "Outerwear" : "Ready-to-Wear"}
        </span>
        <span>/</span>
        <span className="text-primary font-bold">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Gallery */}
        <div className="w-full lg:w-[58%] flex flex-col md:flex-row gap-5">
          {product.images.length > 1 && (
            <div className="order-2 md:order-1 flex md:flex-col gap-3 shrink-0 overflow-x-auto md:overflow-visible">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImg(i)}
                  aria-label={`View product image ${i + 1}`}
                  className={`relative w-20 md:w-24 aspect-[3/4] shrink-0 overflow-hidden bg-surface-container-high transition-all ${
                    activeImg === i ? "ring-1 ring-primary" : ""
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                  {activeImg === i && (
                    <span className="absolute inset-0 bg-primary/10" />
                  )}
                </button>
              ))}
            </div>
          )}
          <div className="order-1 md:order-2 relative flex-1 aspect-[3/4] bg-surface-container-low overflow-hidden shadow-sm">
            <img
              src={product.images[activeImg]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="bg-primary text-on-primary font-label-sm text-label-sm uppercase px-3 py-1.5 tracking-[0.16em]">
                New Season Atelier
              </span>
              <span className="bg-surface/90 text-on-surface px-3 py-1.5 font-label-sm text-label-sm uppercase tracking-widest">
                100% VIRGIN WOOL
              </span>
            </div>
            <button
              aria-label="Save to Wishlist"
              onClick={() => toggle(product.id)}
              className="absolute top-4 right-4 w-10 h-10 bg-surface/90 backdrop-blur-sm flex items-center justify-center text-on-surface hover:text-error transition-colors shadow-sm"
            >
              <span
                className="material-symbols-outlined text-[20px]"
                style={{
                  fontVariationSettings: wished ? "'FILL' 1" : "'FILL' 0",
                  color: wished ? "#ba1a1a" : undefined,
                }}
              >
                favorite
              </span>
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="w-full lg:w-[42%] lg:sticky lg:top-32 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-bold">
              VELORA SIGNATURE ATELIER
            </span>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-[-0.02em] leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-3">
              <span className="font-display-xl-mobile text-display-xl-mobile text-primary font-normal leading-none">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="font-body-md text-body-md text-on-surface-variant line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm uppercase px-2 py-0.5 tracking-wider font-bold">
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  % OFF
                </span>
              )}
              <span className="font-label-sm text-label-sm text-secondary uppercase ml-2">
                ★ {product.rating.toFixed(1)} ({product.reviews} Reviews)
              </span>
            </div>
            <div className="flex items-center gap-2 pt-1 text-on-surface-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
              <span className="tracking-wide uppercase">Verified Maison Archive Collection • 2024 Release</span>
            </div>
          </div>

          <div className="bg-surface-container-high p-4 flex items-start gap-3">
            <span className="material-symbols-outlined text-secondary mt-1">loyalty</span>
            <div>
              <p className="font-title-md text-title-md text-primary uppercase tracking-[0.06em]">
                Maison Exclusive Privileges
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Use code <strong className="text-primary">MAISON10</strong> for an
                extra 10% instant checkout privilege. A complimentary silk dustbag
                and beechwood hanger are included.
              </p>
            </div>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {product.description}
          </p>

          {/* Colour */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-label-lg text-label-lg uppercase tracking-wider text-primary">
                Shade: <span className="font-bold text-on-surface">{color}</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c.name)}
                  title={c.name}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    color === c.name
                      ? "border-primary scale-110"
                      : "border-outline-variant hover:border-on-surface"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface">
                Size: {size}
              </span>
              <button className="font-label-sm text-label-sm text-secondary uppercase hover:underline">
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-w-[48px] px-3 py-3 font-label-md text-label-md uppercase tracking-widest border transition-colors ${
                    size === s
                      ? "bg-primary text-on-primary border-primary"
                      : "bg-surface text-on-surface border-outline-variant hover:border-primary"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface mb-3 block">
              Quantity
            </span>
            <div className="inline-flex items-center border border-outline-variant">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="w-12 text-center font-title-md text-title-md text-primary">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => Math.min(8, q + 1))}
                className="w-10 h-10 flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-[0.16em] hover:bg-secondary transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">
                shopping_bag
              </span>
              {added ? "Added to Bag" : "Add to Bag"}
            </button>
            <button
              onClick={handleBuyNow}
              className="w-full py-4 bg-surface-container-highest text-on-surface font-label-lg text-label-lg uppercase tracking-[0.14em] hover:bg-surface-variant transition-colors"
            >
              Buy Now
            </button>
            <button
              onClick={handleWhatsAppBuy}
              className="w-full py-4 bg-[#25D366] text-white font-label-lg text-label-lg uppercase tracking-[0.2em] hover:opacity-90 transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              Order via WhatsApp
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 py-3 bg-surface-container-low px-3">
            {[
              ["flight_takeoff", "Bespoke Courier", "DHL Express 2-4 Days"],
              ["published_with_changes", "30-Day Salon Trial", "Complimentary pickup"],
              ["workspace_premium", "Provenance Proof", "Maison Certified"],
            ].map(([icon, title, caption]) => (
              <div key={title} className="flex flex-col items-center text-center gap-1 p-2">
                <span className="material-symbols-outlined text-[20px] text-secondary">
                  {icon}
                </span>
                <span className="font-label-sm text-label-sm font-bold uppercase text-primary tracking-wider">
                  {title}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                  {caption}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {[
              ["Garment Details & Craftsmanship", product.details.join(" • ")],
              [
                "Silhouette & Proportion Guide",
                "Designed for a relaxed, considered fit with room for effortless layering.",
              ],
              [
                "Shipping & Maison White Glove Returns",
                "Complimentary express courier and 30-day returns are available.",
              ],
              [
                "Archival Care & Longevity",
                "Follow the garment care instructions supplied with your piece.",
              ],
            ].map(([title, copy]) => (
              <details key={title} className="bg-surface-container-low group">
                <summary className="px-4 py-3.5 flex items-center justify-between cursor-pointer font-title-md text-title-md uppercase tracking-[0.1em] text-primary">
                  {title}
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <p className="px-4 pb-4 font-body-md text-body-md text-on-surface-variant">
                  {copy}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <section className="mt-20 border-t border-outline-variant pt-12">
        <h2 className="font-headline-md text-headline-md uppercase text-primary mb-8">
          Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Margaux L.",
              rating: 5,
              text: "Impeccable tailoring and the fabric feels extraordinary. Fits true to size.",
            },
            {
              name: "James R.",
              rating: 5,
              text: "A timeless piece. The attention to detail is evident in every stitch.",
            },
            {
              name: "Sofia M.",
              rating: 4,
              text: "Beautiful silhouette. Slightly long in the sleeve but easily altered.",
            },
          ].map((r, i) => (
            <div
              key={i}
              className="bg-surface-container-low p-6 shadow-sm flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-title-md text-title-md text-primary font-serif">
                  {r.name}
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  {"\u2605".repeat(r.rating)}
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
