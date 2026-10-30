import { Suspense } from "react";
import ProductsExplorer from "@/components/ProductsExplorer";

export const metadata = {
  title: "Products - VELORA",
};

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Loading collection...
          </p>
        </div>
      }
    >
      <ProductsExplorer />
    </Suspense>
  );
}
