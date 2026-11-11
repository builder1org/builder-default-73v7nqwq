import Image from "next/image";

import { productImageSrc } from "@/lib/products";
import { cn } from "@/lib/utils";

type ProductImageProps = {
  slug: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  grayscale?: boolean;
};

export function ProductImage({
  slug,
  alt,
  className,
  imageClassName,
  priority,
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px",
  grayscale = true,
}: ProductImageProps) {
  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      <Image
        src={productImageSrc(slug)}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          "object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]",
          grayscale && "grayscale",
          imageClassName
        )}
      />
    </div>
  );
}
