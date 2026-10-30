/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { catalogProducts, products } from "@/lib/products";

const categories = ["All", "Men", "Women", "New Arrivals", "Collections", "Accessories"];
const sizes = ["All", "XS", "S", "M", "L", "XL", "One Size", "40", "41", "42", "43", "44"];
const priceRanges = [
  { value: "All", label: "All Prices" },
  { value: "under200", label: "Under $200" },
  { value: "200-350", label: "$200 – $350" },
  { value: "over350", label: "Over $350" },
];

export default function ProductsExplorer() {
  const searchParams = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const initialCategory =
    requestedCategory || (searchParams.has("sort") ? "All" : "Women");
  const initialSort = searchParams.get("sort") === "new" ? "new" : "popular";
  const initialQuery = searchParams.get("q") || "";

  const [category, setCategory] = useState(
    categories.includes(initialCategory) ? initialCategory : "All"
  );
  const [size, setSize] = useState("All");
  const [color, setColor] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [sort, setSort] = useState(initialSort);
  const [query, setQuery] = useState(initialQuery);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const requested = searchParams.get("category");
    const nextCategory =
      requested || (searchParams.has("sort") ? "All" : "Women");
      setCategory(categories.includes(nextCategory) ? nextCategory : "All");
    setSort(searchParams.get("sort") === "new" ? "new" : "popular");
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  const allColors = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.colors.forEach((c) => set.add(c.name)));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const source =
      category === "Women"
        ? catalogProducts
        : products.filter((product) => !product.isCatalog);
    let list = source.filter((p) => {
      if (
        category !== "All" &&
        category !== "New Arrivals" &&
        p.category !== category
      )
        return false;
      if (category === "New Arrivals" && !p.isNew) return false;
      if (size !== "All" && !p.sizes.includes(size)) return false;
      if (color !== "All" && !p.colors.some((c) => c.name === color)) return false;
      if (priceRange === "under200" && p.price >= 200) return false;
      if (priceRange === "200-350" && (p.price < 200 || p.price > 350)) return false;
      if (priceRange === "over350" && p.price <= 350) return false;
      if (query.trim()) {
        const q = query.trim().toLowerCase();
        if (
          !p.name.toLowerCase().includes(q) &&
          !p.category.toLowerCase().includes(q) &&
          !p.description.toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });

    list = [...list].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "new") return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0) || b.popularity - a.popularity;
      return b.popularity - a.popularity;
    });
    return list;
  }, [category, size, color, priceRange, sort, query]);

  const resetFilters = () => {
    setCategory("Women");
    setSize("All");
    setColor("All");
    setPriceRange("All");
    setSort("popular");
    setQuery("");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-4 pb-20">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 mb-6">
      <nav className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm tracking-[0.14em] uppercase">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <span className="text-surface-variant">/</span>
        <span>Women</span>
        <span className="text-surface-variant">/</span>
        <span>Ready-to-Wear</span>
        <span className="text-surface-variant">/</span>
        <span className="text-primary font-bold">Autumn/Winter 2025</span>
      </nav>
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-high font-label-sm text-label-sm text-on-surface tracking-wider uppercase">
          <span className="w-1.5 h-1.5 bg-secondary" />
          {filtered.length} Garments
        </span>
        <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider hidden sm:inline">Collection V.25</span>
      </div>
    </div>
    <div className="relative mb-10 overflow-hidden bg-surface-container-low p-8 lg:p-12">
      <div className="max-w-2xl relative z-10">
        <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-secondary font-bold mb-3 block">
          Autumn / Winter Couture
        </span>
        <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-4">
          {category === "Women" ? "Women's Collection" : `${category} Collection`}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Sophisticated silhouettes, premium organic cashmeres, and tailored
          outerwear crafted for enduring grace. Designed with architectural
          exactitude in our Paris atelier.
        </p>
      </div>
      <span className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none hidden lg:block font-headline-lg text-[130px] leading-none text-primary uppercase">
        VELORA
      </span>
    </div>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4 py-3">
      <div className="font-body-sm text-body-sm text-on-surface-variant">
        Displaying <strong className="text-primary">{filtered.length}</strong> of{" "}
        <strong className="text-primary">{filtered.length}</strong> garments
      </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setFiltersOpen((v) => !v)}
            className="lg:hidden px-4 py-2.5 bg-surface-container text-on-surface font-label-md text-label-md uppercase tracking-widest"
          >
            Filters
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-surface-container px-4 py-2.5 font-label-md text-label-md uppercase tracking-widest text-on-surface focus:outline-none border border-outline-variant/40"
          >
            <option value="popular">Sort: Popularity</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="new">Newest First</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar filters */}
        <aside
          className={`${
            filtersOpen ? "block" : "hidden"
          } lg:block w-full lg:w-64 shrink-0 bg-surface-container-lowest p-5 h-fit lg:sticky lg:top-32 shadow-sm`}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary font-bold">
              Filters
            </h2>
            <button
              onClick={resetFilters}
              className="font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:underline"
            >
              Reset
            </button>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <label className="font-label-md text-label-md uppercase tracking-widest text-on-surface mb-2 block">
                Search
              </label>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="w-full bg-surface px-3 py-2 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none border border-outline-variant/40"
              />
            </div>

            <div>
              <label className="font-label-md text-label-md uppercase tracking-widest text-on-surface mb-2 block">
                Category
              </label>
              <div className="flex flex-col gap-1.5">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`text-left px-3 py-2 font-body-sm text-body-sm transition-colors ${
                      category === c
                        ? "bg-primary text-on-primary"
                        : "bg-surface hover:bg-surface-variant text-on-surface"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-label-md text-label-md uppercase tracking-widest text-on-surface mb-2 block">
                Size
              </label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full bg-surface px-3 py-2 font-body-sm text-body-sm text-on-surface focus:outline-none border border-outline-variant/40"
              >
                {sizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-label-md text-label-md uppercase tracking-widest text-on-surface mb-2 block">
                Colour
              </label>
              <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full bg-surface px-3 py-2 font-body-sm text-body-sm text-on-surface focus:outline-none border border-outline-variant/40"
              >
                {allColors.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-label-md text-label-md uppercase tracking-widest text-on-surface mb-2 block">
                Price
              </label>
              <div className="flex flex-col gap-1.5">
                {priceRanges.map((r) => (
                  <button
                    key={r.value}
                    onClick={() => setPriceRange(r.value)}
                    className={`text-left px-3 py-2 font-body-sm text-body-sm transition-colors ${
                      priceRange === r.value
                        ? "bg-primary text-on-primary"
                        : "bg-surface hover:bg-surface-variant text-on-surface"
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-1">
          <div className="bg-surface-container-high px-4 py-2.5 flex items-center gap-2 text-secondary mb-4">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold">
              Provenance Guarantee: traceable Italian wool, Como silks &amp; Mongolian cashmere
            </span>
          </div>
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <span className="material-symbols-outlined text-[48px] text-on-surface-variant/40">
                search_off
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mt-4">
                No pieces found
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Try adjusting your filters or search terms.
              </p>
              <button
                onClick={resetFilters}
                className="mt-6 px-6 py-3 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
