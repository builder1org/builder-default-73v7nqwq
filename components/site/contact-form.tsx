"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const searchParams = useSearchParams();
  const productHint = searchParams.get("product");

  const defaultMessage = useMemo(() => {
    if (!productHint) return "";
    return `سلام، برای سفارش «${productHint}» پیام می‌دهم.\n`;
  }, [productHint]);

  return (
    <form
      className="rounded-xl border border-border bg-card p-6 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="grid gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="contact-name">نام</Label>
          <Input id="contact-name" name="name" autoComplete="name" required />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="contact-phone">تلفن</Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            dir="ltr"
            className="text-left"
            required
          />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="contact-message">پیام</Label>
          <Textarea
            id="contact-message"
            name="message"
            rows={5}
            defaultValue={defaultMessage}
            required
          />
        </div>
      </div>
      <p className="mt-4 text-muted-foreground text-xs">
        این فرم نمایشی است؛ پس از اتصال به سرویس ایمیل یا CRM، ارسال واقعی فعال
        می‌شود.
      </p>
      <Button type="submit" className="mt-6 w-full sm:w-auto">
        ارسال پیام
      </Button>
    </form>
  );
}
