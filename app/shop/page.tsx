import type { Metadata } from "next";
import { Suspense } from "react";

import { ProductCard } from "@/components/site/product-card";
import { ShopFilters } from "@/components/shop/shop-filters";
import {
  products,
  type ProductCategory,
  categoryLabels,
} from "@/lib/products";

export const metadata: Metadata = {
  title: "فروشگاه",
  description: "تمام محصولات مزون آوا — فیلتر بر اساس دسته.",
};

type ShopPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const validCategories: ProductCategory[] = [
    "women",
    "men",
    "accessories",
    "new",
  ];
  const category =
    params.category &&
    validCategories.includes(params.category as ProductCategory)
      ? (params.category as ProductCategory)
      : undefined;
  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;

  const title = category ? categoryLabels[category] : "همه محصولات";

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">فروشگاه</h1>
        <p className="mt-2 text-muted-foreground text-sm">
          نمایش: <span className="text-foreground">{title}</span> —{" "}
          {filtered.length} محصول
        </p>
      </div>
      <Suspense
        fallback={
          <div className="mt-8 h-10 w-full max-w-xl animate-pulse rounded-md bg-muted" />
        }
      >
        <div className="mt-8">
          <ShopFilters />
        </div>
      </Suspense>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-muted-foreground text-sm">
          در این دسته محصولی ثبت نشده است.
        </p>
      ) : null}
    </main>
  );
}
