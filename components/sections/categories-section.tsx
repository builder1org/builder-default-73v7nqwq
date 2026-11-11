import Link from "next/link";

import { categoryLabels, type ProductCategory } from "@/lib/products";

const categories: { key: ProductCategory; gradient: string; href: string }[] = [
  {
    key: "women",
    gradient: "from-zinc-300 via-zinc-100 to-neutral-200",
    href: "/shop?category=women",
  },
  {
    key: "men",
    gradient: "from-neutral-400 via-neutral-200 to-zinc-300",
    href: "/shop?category=men",
  },
  {
    key: "accessories",
    gradient: "from-stone-300 via-stone-100 to-zinc-200",
    href: "/shop?category=accessories",
  },
  {
    key: "new",
    gradient: "from-zinc-800 via-zinc-600 to-zinc-900",
    href: "/shop?category=new",
  },
];

export function CategoriesSection() {
  return (
    <section id="collections" className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              دسته‌ها
            </h2>
            <p className="mt-2 text-muted-foreground text-sm">
              بر اساس سلیقه خود فیلتر کنید
            </p>
          </div>
          <Link
            href="/shop"
            className="text-primary text-sm font-medium hover:underline"
          >
            همه محصولات
          </Link>
        </div>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => (
            <Link
              key={cat.key}
              href={cat.href}
              className="group min-w-[11rem] shrink-0 snap-start sm:min-w-[14rem]"
            >
              <div
                className={`aspect-[3/4] rounded-xl bg-linear-to-br ${cat.gradient} transition-transform group-hover:scale-[1.02]`}
              />
              <p className="mt-3 font-medium">{categoryLabels[cat.key]}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
