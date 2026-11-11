import Link from "next/link";

import { siteContact } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-semibold text-lg">مزون آوا</p>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            پوشاک انتخاب‌شده با تمرکز روی دوخت، جنس و استایل روزمره. قیمت‌ها و
            موجودی نمونه هستند — با شما هماهنگ می‌شوند.
          </p>
        </div>
        <div>
          <p className="font-medium text-sm">دسترسی سریع</p>
          <ul className="mt-3 space-y-2 text-muted-foreground text-sm">
            <li>
              <Link href="/shop" className="hover:text-foreground">
                فروشگاه
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-foreground">
                درباره ما
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground">
                تماس
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-sm">تماس</p>
          <ul className="mt-3 space-y-2 text-muted-foreground text-sm">
            <li>{siteContact.phone}</li>
            <li>{siteContact.email}</li>
            <li>{siteContact.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-muted-foreground text-xs">
        © {new Date().getFullYear()} مزون آوا — تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
