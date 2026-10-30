import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import ProductCard from "@/components/ProductCard";
import { getProduct, getRelated } from "@/lib/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  const related = getRelated(id, 4);

  return (
    <div>
      <ProductDetail product={product} />
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-headline-lg text-headline-lg uppercase text-primary">
              Related Pieces
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}