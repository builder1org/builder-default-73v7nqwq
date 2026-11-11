import type { Metadata } from "next";
import { Suspense } from "react";

import { ContactForm } from "@/components/site/contact-form";
import { siteContact } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "تماس",
  description: "تماس با مزون آوا برای سفارش و پشتیبانی.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">تماس با ما</h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            برای ثبت سفارش، پیگیری ارسال یا سوالات درباره سایز، فرم را پر کنید
            یا از اطلاعات زیر استفاده کنید.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <span className="text-muted-foreground">تلفن: </span>
              {siteContact.phone}
            </li>
            <li>
              <span className="text-muted-foreground">ایمیل: </span>
              <span dir="ltr" className="inline-block">
                {siteContact.email}
              </span>
            </li>
            <li>
              <span className="text-muted-foreground">آدرس: </span>
              {siteContact.address}
            </li>
          </ul>
        </div>
        <Suspense fallback={<div className="h-64 animate-pulse rounded-xl bg-muted" />}>
          <ContactForm />
        </Suspense>
      </div>
    </main>
  );
}
