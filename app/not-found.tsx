import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <h1 className="text-2xl font-semibold">صفحه پیدا نشد</h1>
      <p className="mt-3 text-muted-foreground text-sm">
        ممکن است آدرس را اشتباه وارد کرده باشید یا محصول حذف شده باشد.
      </p>
      <Button className="mt-8" asChild>
        <Link href="/">بازگشت به خانه</Link>
      </Button>
    </main>
  );
}
