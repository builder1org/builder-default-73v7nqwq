import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { ProductImage } from "@/components/site/product-image";
import { Button } from "@/components/ui/button";
import {
  getProductBySlug,
  products,
  categoryLabels,
} from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "محصول یافت نشد" };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  const orderHref = `/contact?product=${encodeURIComponent(product.name)}`;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        href="/shop"
        className="inline-flex items-center gap-1 text-muted-foreground text-sm hover:text-foreground"
      >
        <ArrowRight className="size-4" aria-hidden />
        بازگشت به فروشگاه
      </Link>
      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <ProductImage
          slug={product.slug}
          alt={product.imageAlt}
          className="aspect-[4/5] min-h-80 rounded-2xl lg:min-h-[28rem] lg:aspect-auto"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          grayscale={!product.preserveColor}
          imageClassName={product.preserveColor ? "object-top" : undefined}
        />
        <div>
          <p className="text-muted-foreground text-sm">
            {categoryLabels[product.category]}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            {product.name}
          </h1>
          <p className="mt-4 text-lg tabular-nums">{product.priceLabel}</p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {product.description}
          </p>
          <div className="mt-8">
            <p className="font-medium text-sm">سایزهای موجود</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <li
                  key={size}
                  className="rounded-md border border-border bg-background px-3 py-1.5 text-sm"
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-muted-foreground text-xs leading-relaxed">
            قیمت‌ها نمونه هستند. برای ثبت سفارش و هماهنگی ارسال، از دکمه زیر
            استفاده کنید.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href={orderHref}>درخواست سفارش</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">سوالات؟ تماس بگیرید</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
