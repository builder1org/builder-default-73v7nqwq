export type ProductCategory = "women" | "men" | "accessories" | "new";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  priceLabel: string;
  description: string;
  sizes: string[];
  imageAlt: string;
  /** When true, product photo keeps original color (no grayscale filter). */
  preserveColor?: boolean;
  tag?: string;
};

export const categoryLabels: Record<ProductCategory, string> = {
  women: "زنانه",
  men: "مردانه",
  accessories: "اکسسوری",
  new: "تازه‌ها",
};

export function productImageSrc(slug: string): string {
  return `/images/products/${slug}.jpg`;
}

export const products: Product[] = [
  {
    slug: "angels-guard-hoodie",
    name: "هودی Angels Guard Our Hearts",
    category: "new",
    priceLabel: "[قیمت محصول]",
    description:
      "هودی مشکی سنگین با چاپ پشت‌کار: قلب آناتومیک، فرشته‌ها و تایپوگرافی Angels Guard Our Hearts؛ صلیب تزئینی روی آستین. استایل استریت‌ور مونوکروم با جزئیات قرمز.",
    sizes: ["S", "M", "L", "XL"],
    imageAlt:
      "هودی مشکی با گرافیک پشت‌کار Angels Guard Our Hearts، قلب قرمز و فرشته‌ها",
    preserveColor: true,
    tag: "جدید",
  },
  {
    slug: "mantu-linen-cream",
    name: "مانتو کتان کرم",
    category: "women",
    priceLabel: "۲٬۴۵۰٬۰۰۰ تومان",
    description:
      "مانتو آزاد دوخته‌شده از پارچه کتان تنفس‌پذیر؛ مناسب روزهای گرم و استایل مینیمال.",
    sizes: ["S", "M", "L", "XL"],
    imageAlt: "مانتو کتان کرم روی مدل در استودیو",
    tag: "پرفروش",
  },
  {
    slug: "wool-coat-charcoal",
    name: "پالتو پشمی زغالی",
    category: "women",
    priceLabel: "۵٬۹۰۰٬۰۰۰ تومان",
    description: "پالتو بلند با آستر نرم؛ برش کلاسیک برای پاییز و زمستان.",
    sizes: ["S", "M", "L"],
    imageAlt: "پالتو پشمی بلند به رنگ زغالی",
    tag: "کلکشن پاییز",
  },
  {
    slug: "silk-blouse-terracotta",
    name: "بلوز حریر آجری",
    category: "women",
    priceLabel: "۱٬۸۵۰٬۰۰۰ تومان",
    description: "حریر مصنوعی درخشان با یقه هالتر؛ ترکیب با شلوار رسمی یا دامن.",
    sizes: ["S", "M", "L"],
    imageAlt: "بلوز زنانه با بافت نرم",
  },
  {
    slug: "mens-oxford-shirt",
    name: "پیراهن اکسفورد مردانه",
    category: "men",
    priceLabel: "۱٬۲۹۰٬۰۰۰ تومان",
    description: "پارچه اکسفورد بادوام؛ مناسب محیط کار و استایل کژوال.",
    sizes: ["M", "L", "XL", "XXL"],
    imageAlt: "پیراهن مردانه آکسفورد روی میز یا مدل",
  },
  {
    slug: "mens-tailored-trousers",
    name: "شلوار فاستونی دقیق",
    category: "men",
    priceLabel: "۱٬۶۵۰٬۰۰۰ تومان",
    description: "برش اسلیم با چروک تمیز؛ رنگ خاکستری خنثی برای هر کمد.",
    sizes: ["30", "32", "34", "36"],
    imageAlt: "شلوار فاستونی مردانه با برش دقیق",
  },
  {
    slug: "leather-crossbody",
    name: "کیف دوشی چرم",
    category: "accessories",
    priceLabel: "۲٬۱۰۰٬۰۰۰ تومان",
    description: "چرم مصنوعی باکیفیت با بند قابل تنظیم و جیب داخلی زیپ‌دار.",
    sizes: ["یک سایز"],
    imageAlt: "کیف دوشی چرم کوچک",
    tag: "جدید",
  },
  {
    slug: "wool-scarf-stripe",
    name: "شال پشمی راه‌راه",
    category: "accessories",
    priceLabel: "۶۸۰٬۰۰۰ تومان",
    description: "بافت نرم؛ ترکیب رنگ‌های خنثی برای لایه‌بندی پاییزی.",
    sizes: ["یک سایز"],
    imageAlt: "شال بافتنی یا پشمی تا‌شده",
  },
  {
    slug: "midi-dress-sage",
    name: "پیراهن میدی سِیج",
    category: "new",
    priceLabel: "۳٬۲۰۰٬۰۰۰ تومان",
    description: "برش A-line با کمربند پارچه‌ای؛ مناسب مهمانی و روزمره شیک.",
    sizes: ["S", "M", "L"],
    imageAlt: "پیراهن میدی زنانه",
    tag: "تازه",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
