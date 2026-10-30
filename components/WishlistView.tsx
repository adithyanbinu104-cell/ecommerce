"use client";

import Link from "next/link";
import { useWishlist } from "@/components/WishlistProvider";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function WishlistView() {
  const { ids, isReady, remove, count } = useWishlist();

  const wishedProducts = ids
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as typeof products;

  if (!isReady) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
        <p className="font-body-md text-body-md text-on-surface-variant">
          Loading wishlist...
        </p>
      </div>
    );
  }

  if (wishedProducts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center flex flex-col items-center gap-6">
        <span className="material-symbols-outlined text-[64px] text-on-surface-variant/40">
          favorite
        </span>
        <h1 className="font-headline-lg text-headline-lg uppercase text-primary">
          Your Wishlist is Empty
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Save your favourite pieces to revisit them later.
        </p>
        <Link
          href="/products"
          className="px-8 py-4 bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-[0.2em] hover:bg-secondary transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <div className="flex items-end justify-between mb-8 gap-4">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary">
            SAVED PIECES
          </span>
          <h1 className="font-headline-lg text-headline-lg uppercase text-primary mt-1">
            Wishlist
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            {count} saved item{count !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {wishedProducts.map((p) => (
          <div key={p.id} className="relative">
            <ProductCard product={p} />
            <button
              onClick={() => remove(p.id)}
              className="absolute top-12 right-4 z-10 w-9 h-9 rounded-full bg-surface/90 backdrop-blur-sm flex items-center justify-center text-error hover:bg-error hover:text-on-error transition-colors shadow-sm"
              aria-label="Remove from Wishlist"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}