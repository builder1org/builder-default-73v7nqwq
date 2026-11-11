import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { productImageSrc } from "@/lib/products";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:py-20">
        <div className="flex flex-col justify-center lg:col-span-5">
          <p className="text-primary text-sm font-medium tracking-wide">
            کلکشن جدید — چاپ امضادار
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            سیاه و سفید، با جزئیات قابل‌لمس
          </h1>
          <p className="mt-5 max-w-md text-muted-foreground leading-relaxed">
            هودی Angels Guard Our Hearts با چاپ پشت‌کار و آستین تزئینی — ترکیب
            استریت‌ور و گرافیک ویرایشی برای بوتیک سیاه و سفید.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/product/angels-guard-hoodie">
                مشاهده هودی
                <ArrowLeft className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/shop">همه محصولات</Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:col-span-7 lg:gap-4">
          <Link
            href="/product/angels-guard-hoodie"
            className="group relative col-span-2 row-span-2 min-h-64 overflow-hidden rounded-2xl border border-border bg-black sm:min-h-80"
          >
            <Image
              src={productImageSrc("angels-guard-hoodie")}
              alt="هودی مشکی Angels Guard Our Hearts با چاپ فرشته‌ها و قلب قرمز"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </Link>
          <div className="min-h-28 rounded-2xl bg-linear-to-br from-zinc-800 to-black" aria-hidden />
          <div className="min-h-28 rounded-2xl bg-linear-to-br from-neutral-200 to-zinc-100" aria-hidden />
        </div>
      </div>
    </section>
  );
}
