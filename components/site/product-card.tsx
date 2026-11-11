import Link from "next/link";

import { ProductImage } from "@/components/site/product-image";
import type { Product } from "@/lib/products";
import { categoryLabels } from "@/lib/products";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  className?: string;
  featured?: boolean;
};

export function ProductCard({ product, className, featured }: ProductCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg",
        featured && "md:col-span-2 md:row-span-2",
        className
      )}
    >
      <Link
        href={`/product/${product.slug}`}
        className="relative flex flex-1 flex-col"
      >
        <ProductImage
          slug={product.slug}
          alt={product.imageAlt}
          className={cn(
            "aspect-[4/5]",
            featured && "md:aspect-auto md:min-h-80"
          )}
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 560px"
              : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
          }
        />
        {product.tag ? (
          <span className="pointer-events-none absolute top-3 start-3 z-10 rounded-full bg-background/90 px-2.5 py-0.5 text-xs font-medium backdrop-blur">
            {product.tag}
          </span>
        ) : null}
        <div className="flex flex-1 flex-col gap-1 p-4">
          <p className="text-muted-foreground text-xs">
            {categoryLabels[product.category]}
          </p>
          <h3 className="font-medium leading-snug transition-colors group-hover:text-primary">
            {product.name}
          </h3>
          <p className="mt-auto pt-2 text-sm tabular-nums">{product.priceLabel}</p>
        </div>
      </Link>
    </article>
  );
}
