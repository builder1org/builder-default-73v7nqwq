"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siteContact } from "@/lib/site-config";

export function NewsletterSection() {
  return (
    <section className="border-t border-border py-14 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold sm:text-2xl">
            خبرنامه {siteContact.brandName}
          </h2>
          <p className="mt-2 max-w-md text-muted-foreground text-sm">
            اولین نفر باشید که از ورود کلکشن‌های جدید باخبر می‌شوید. ایمیل شما
            فقط برای خبرنامه استفاده می‌شود.
          </p>
        </div>
        <form
          className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-end"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="grid w-full gap-1.5 sm:flex-1">
            <Label htmlFor="newsletter-email">ایمیل</Label>
            <Input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="name@example.com"
              autoComplete="email"
              dir="ltr"
              className="text-left"
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            عضویت
          </Button>
        </form>
      </div>
    </section>
  );
}
