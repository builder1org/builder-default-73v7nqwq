import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:py-20">
        <div className="flex flex-col justify-center lg:col-span-5">
          <p className="text-primary text-sm font-medium tracking-wide">
            کلکشن پاییز — نسخه محدود
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            استایلی که با شما حرکت می‌کند
          </h1>
          <p className="mt-5 max-w-md text-muted-foreground leading-relaxed">
            پوشاک و اکسسوری منتخب برای روزهای شلوغ و شب‌های آرام. هر قطعه با
            توجه به دوخت و جنس انتخاب شده است.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/shop">
                ورود به فروشگاه
                <ArrowLeft className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#lookbook">لوک‌بوک</Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:col-span-7 lg:gap-4">
          <div className="col-span-2 row-span-2 min-h-52 rounded-2xl bg-linear-to-br from-stone-300 via-amber-100 to-orange-200 sm:min-h-72" />
          <div className="min-h-28 rounded-2xl bg-linear-to-br from-zinc-600 to-zinc-800" />
          <div className="min-h-28 rounded-2xl bg-linear-to-br from-orange-100 to-rose-200" />
        </div>
      </div>
    </section>
  );
}
