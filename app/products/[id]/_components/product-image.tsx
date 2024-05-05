"use client";

import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "lucide-react";

interface ProductImageProps {
  product: Pick<Product, "name" | "imageUrl">;
}

const ProductImage = ({ product }: ProductImageProps) => {
  const router = useRouter();

  const handleBackClick = () => router.back();

  return (
    <div className="relative h-[360px] w-full">
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        className="object-cover"
      />

      <Button
        onClick={handleBackClick}
        className="absolute left-2 top-2 rounded-full bg-white text-foreground hover:text-white"
        size="icon"
      >
        <ChevronLeftIcon />
      </Button>
    </div>
  );
};

export default ProductImage;
