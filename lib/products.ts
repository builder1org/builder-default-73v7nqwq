export type ProductCategory = "women" | "men" | "accessories" | "new";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  priceLabel: string;
  description: string;
  sizes: string[];
  accent: string;
  tag?: string;
};

export const categoryLabels: Record<ProductCategory, string> = {
  women: "زنانه",
  men: "مردانه",
  accessories: "اکسسوری",
  new: "تازه‌ها",
};

export const products: Product[] = [
  {
    slug: "mantu-linen-cream",
    name: "مانتو کتان کرم",
    category: "women",
    priceLabel: "۲٬۴۵۰٬۰۰۰ تومان",
    description:
      "مانتو آزاد دوخته‌شده از پارچه کتان تنفس‌پذیر؛ مناسب روزهای گرم و استایل مینیمال.",
    sizes: ["S", "M", "L", "XL"],
    accent: "from-stone-200 via-amber-50 to-stone-300",
    tag: "پرفروش",
  },
  {
    slug: "wool-coat-charcoal",
    name: "پالتو پشمی زغالی",
    category: "women",
    priceLabel: "۵٬۹۰۰٬۰۰۰ تومان",
    description: "پالتو بلند با آستر نرم؛ برش کلاسیک برای پاییز و زمستان.",
    sizes: ["S", "M", "L"],
    accent: "from-zinc-700 via-zinc-600 to-zinc-800",
    tag: "کلکشن پاییز",
  },
  {
    slug: "silk-blouse-terracotta",
    name: "بلوز حریر آجری",
    category: "women",
    priceLabel: "۱٬۸۵۰٬۰۰۰ تومان",
    description: "حریر مصنوعی درخشان با یقه هالتر؛ ترکیب با شلوار رسمی یا دامن.",
    sizes: ["S", "M", "L"],
    accent: "from-orange-200 via-rose-100 to-orange-300",
  },
  {
    slug: "mens-oxford-shirt",
    name: "پیراهن اکسفورد مردانه",
    category: "men",
    priceLabel: "۱٬۲۹۰٬۰۰۰ تومان",
    description: "پارچه اکسفورد بادوام؛ مناسب محیط کار و استایل کژوال.",
    sizes: ["M", "L", "XL", "XXL"],
    accent: "from-sky-100 via-slate-100 to-sky-200",
  },
  {
    slug: "mens-tailored-trousers",
    name: "شلوار فاستونی دقیق",
    category: "men",
    priceLabel: "۱٬۶۵۰٬۰۰۰ تومان",
    description: "برش اسلیم با چروک تمیز؛ رنگ خاکستری خنثی برای هر کمد.",
    sizes: ["30", "32", "34", "36"],
    accent: "from-neutral-400 via-neutral-300 to-neutral-500",
  },
  {
    slug: "leather-crossbody",
    name: "کیف دوشی چرم",
    category: "accessories",
    priceLabel: "۲٬۱۰۰٬۰۰۰ تومان",
    description: "چرم مصنوعی باکیفیت با بند قابل تنظیم و جیب داخلی زیپ‌دار.",
    sizes: ["یک سایز"],
    accent: "from-amber-800 via-amber-700 to-amber-900",
    tag: "جدید",
  },
  {
    slug: "wool-scarf-stripe",
    name: "شال پشمی راه‌راه",
    category: "accessories",
    priceLabel: "۶۸۰٬۰۰۰ تومان",
    description: "بافت نرم؛ ترکیب رنگ‌های خنثی برای لایه‌بندی پاییزی.",
    sizes: ["یک سایز"],
    accent: "from-red-200 via-stone-200 to-red-100",
  },
  {
    slug: "midi-dress-sage",
    name: "پیراهن میدی سِیج",
    category: "new",
    priceLabel: "۳٬۲۰۰٬۰۰۰ تومان",
    description: "برش A-line با کمربند پارچه‌ای؛ مناسب مهمانی و روزمره شیک.",
    sizes: ["S", "M", "L"],
    accent: "from-emerald-100 via-teal-50 to-emerald-200",
    tag: "تازه",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
