import type { Metadata } from "next";

import { siteContact } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "درباره ما",
  description: `داستان ${siteContact.brandName} و رویکرد ما به پوشاک.`,
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-semibold tracking-tight">
        درباره {siteContact.brandName}
      </h1>
      <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
        <p>
          {siteContact.brandName} با تمرکز بر کیفیت پارچه و برش تمیز شکل گرفته
          است. ما معتقدیم
          کمد لباس باید کم‌تعداد اما پرکاربرد باشد — قطعاتی که سال‌ها با شما
          می‌مانند.
        </p>
        <p>
          این صفحه placeholder است. می‌توانید داستان واقعی برند، تیم دوخت، یا
          ارزش‌های پایداری خود را اینجا جایگزین کنید.
        </p>
        <p>
          برای همکاری عمده یا سفارش سفارشی، از صفحه تماس با ما پیام بفرستید.
        </p>
      </div>
    </main>
  );
}
