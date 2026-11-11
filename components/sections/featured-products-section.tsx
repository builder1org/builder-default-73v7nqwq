import Link from "next/link";

import { ProductCard } from "@/components/site/product-card";
import { products } from "@/lib/products";

export function FeaturedProductsSection() {
  const featured = products.slice(0, 5);

  return (
    <section className="border-y border-border bg-surface-muted/40 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            منتخب هفته
          </h2>
          <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
            ترکیب بِنتویی از پرفروش‌ها و تازه‌ها — برای دیدن همه به فروشگاه
            بروید.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {featured.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              featured={index === 0}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/shop"
            className="text-primary text-sm font-medium hover:underline"
          >
            مشاهده تمام محصولات
          </Link>
        </div>
      </div>
    </section>
  );
}
