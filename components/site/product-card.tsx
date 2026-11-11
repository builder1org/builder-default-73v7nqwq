import Link from "next/link";

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
      <Link href={`/product/${product.slug}`} className="flex flex-1 flex-col">
        <div
          className={cn(
            "relative aspect-[4/5] bg-linear-to-br",
            product.accent,
            featured && "md:aspect-auto md:min-h-80"
          )}
        >
          {product.tag ? (
            <span className="absolute top-3 start-3 rounded-full bg-background/90 px-2.5 py-0.5 text-xs font-medium backdrop-blur">
              {product.tag}
            </span>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col gap-1 p-4">
          <p className="text-muted-foreground text-xs">
            {categoryLabels[product.category]}
          </p>
          <h3 className="font-medium leading-snug group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="mt-auto pt-2 text-sm tabular-nums">{product.priceLabel}</p>
        </div>
      </Link>
    </article>
  );
}
