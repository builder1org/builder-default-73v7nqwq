import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { siteContact } from "@/lib/site-config";

import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteContact.brandName} | فروشگاه پوشاک`,
    template: `%s | ${siteContact.brandName}`,
  },
  description:
    "فروشگاه آنلاین پوشاک و اکسسوری — کلکشن زنانه، مردانه و تازه‌ها.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="font-sans min-h-dvh flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
