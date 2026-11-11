import Link from "next/link";

import { Button } from "@/components/ui/button";

export function LookbookSection() {
  return (
    <section id="lookbook" className="py-14 sm:py-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border px-4 py-16 sm:px-10 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-l from-background via-background/80 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-linear-to-br from-zinc-700 via-stone-500 to-orange-300 opacity-90"
          aria-hidden
        />
        <div className="relative max-w-md">
          <p className="text-primary-foreground/80 text-sm">لوک‌بوک</p>
          <h2 className="mt-2 text-3xl font-semibold text-primary-foreground sm:text-4xl">
            لایه‌ها، بافت‌ها، نور طبیعی
          </h2>
          <p className="mt-4 text-primary-foreground/90 text-sm leading-relaxed">
            ایده‌استایل برای ترکیب کتان، پشم و چرم در یک ست — بدون نیاز به
            کمد پر از قطعات دورریختنی.
          </p>
          <Button variant="secondary" className="mt-8" asChild>
            <Link href="/shop">همین حالا ببینید</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
