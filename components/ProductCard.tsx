"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { useWishlist } from "@/components/WishlistProvider";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const { isWished, toggle } = useWishlist();
  const { addItem } = useCart();
  const wished = isWished(product.id);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const size = product.sizes.includes("M")
      ? "M"
      : product.sizes[0] ?? "One Size";
    const color = product.colors[0]?.name ?? "";
    const image = product.listingImage ?? product.images[0];
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image,
      size,
      color,
      quantity: 1,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )
      : null;

  return (
    <article className="flex flex-col bg-surface shadow-sm group">
      <Link href={`/products/${product.id}`} className="relative w-full aspect-[3/4] overflow-hidden bg-surface-container block">
        <img
          src={product.listingImage ?? product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
          {product.badge && (
            <span className="px-2.5 py-1 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest">
              {product.badge}
            </span>
          )}
          {discount && !product.badge && (
            <span className="px-2.5 py-1 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest">
              -{discount}%
            </span>
          )}
        </div>
        <button
          aria-label="Add to cart"
          onClick={handleAddToCart}
          className="absolute top-4 right-14 w-9 h-9 rounded-full bg-surface/90 backdrop-blur-sm flex items-center justify-center text-on-surface hover:text-primary transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-[18px]">
            shopping_bag
          </span>
        </button>
        <button
          aria-label="Save to Wishlist"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggle(product.id);
          }}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface/90 backdrop-blur-sm flex items-center justify-center text-on-surface hover:text-error transition-colors shadow-sm"
        >
          <span
            className="material-symbols-outlined text-[18px]"
            style={{ fontVariationSettings: wished ? "'FILL' 1" : "'FILL' 0", color: wished ? "#ba1a1a" : undefined }}
          >
            favorite
          </span>
        </button>
        {added && (
          <span className="absolute bottom-4 left-4 right-4 text-center px-3 py-1.5 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest shadow-sm pointer-events-none">
            Added to cart
          </span>
        )}
      </Link>
      <div className="p-5 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            {product.colors.slice(0, 3).map((c) => (
              <span
                key={c.name}
                className="w-3 h-3 rounded-full shadow-sm"
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>
        </div>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-title-md text-title-md text-primary font-serif truncate hover:underline">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-baseline gap-3 pt-1">
          <span className="font-title-md text-title-md text-primary font-bold">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="font-body-sm text-body-sm text-on-surface-variant line-through">
              ${product.originalPrice}
            </span>
          )}
          <span className="font-label-sm text-label-sm text-secondary uppercase ml-auto">
            {product.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </article>
  );
}
