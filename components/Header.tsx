"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { useWishlist } from "@/components/WishlistProvider";

const navLinks = [
  { label: "New Arrivals", href: "/products?sort=new" },
  { label: "Women", href: "/products?category=Women" },
  { label: "Men", href: "/products?category=Men" },
  { label: "Collections", href: "/products?category=Collections" },
  { label: "Atelier Editorial", href: "/products?category=Collections" },
];

export default function Header() {
  const { totalItems } = useCart();
  const { count: wishlistCount } = useWishlist();
  const pathname = usePathname();
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/products?q=${encodeURIComponent(q)}` : "/products");
    setSearchOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <aside className="w-full bg-primary text-on-primary text-[11px] uppercase tracking-[0.2em] py-2 px-6 flex items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex-1" />
        <p className="font-label-sm text-label-sm tracking-[0.18em] text-center font-medium">
          NEW SEASON COLLECTION - UP TO 40% OFF{" "}
          <span className="mx-2 text-surface-variant/40">|</span> COMPLIMENTARY
          EXPRESS WORLDWIDE COURIER
        </p>
        <div className="flex-1 flex justify-end items-center gap-4 text-surface-container-highest">
          <div className="flex items-center gap-1 cursor-pointer font-label-sm text-label-sm tracking-widest hover:text-on-primary transition-colors">
            <span className="material-symbols-outlined text-[14px]">public</span>
            <span>USD / US ($)</span>
            <span className="material-symbols-outlined text-[14px]">
              expand_more
            </span>
          </div>
        </div>
      </aside>
      <div className="h-20 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto h-full px-6 lg:px-12 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex flex-col items-start select-none group shrink-0"
          >
            <span className="font-headline-md text-headline-md tracking-[0.28em] uppercase text-primary leading-none group-hover:opacity-85 transition-opacity">
              V E L O R A
            </span>
            <span className="font-label-sm text-label-sm tracking-[0.35em] text-secondary uppercase mt-1">
              Maison Atelier
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`uppercase tracking-[0.14em] transition-colors py-1 font-label-lg text-label-lg ${
                  (pathname === "/" && l.label === "New Arrivals") ||
                  (pathname === "/products" && l.label === "Women")
                    ? "text-primary font-bold border-b border-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              className="w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                search
              </span>
            </button>
            <Link
              aria-label="Wishlist"
              href="/wishlist"
              className="relative w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                favorite
              </span>
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-primary text-on-primary font-label-sm text-[9px] rounded-full flex items-center justify-center leading-none">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link
              aria-label="Shopping Bag"
              href="/cart"
              className="relative w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                shopping_bag
              </span>
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-secondary text-on-secondary font-label-sm text-[9px] rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </Link>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
        {searchOpen && (
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-3">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search garments, fabrics, collections..."
                className="flex-1 bg-surface-container-low px-4 py-2.5 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:bg-surface-container-lowest transition-colors border border-outline-variant/40"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
