"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import type { ProductCategory } from "@/lib/products";
import { categoryLabels } from "@/lib/products";
import { cn } from "@/lib/utils";

const allCategories: (ProductCategory | "all")[] = [
  "all",
  "women",
  "men",
  "accessories",
  "new",
];

export function ShopFilters() {
  const searchParams = useSearchParams();
  const active = (searchParams.get("category") as ProductCategory | null) ?? "all";

  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="فیلتر دسته">
      {allCategories.map((cat) => {
        const href = cat === "all" ? "/shop" : `/shop?category=${cat}`;
        const isActive = active === cat || (cat === "all" && !searchParams.get("category"));
        const label = cat === "all" ? "همه" : categoryLabels[cat];

        return (
          <Link
            key={cat}
            href={href}
            role="tab"
            aria-selected={isActive}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background hover:bg-muted"
            )}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
