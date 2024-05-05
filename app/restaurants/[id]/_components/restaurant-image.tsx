"use client";

import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { Restaurant } from "@prisma/client";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon, HeartIcon } from "lucide-react";

interface RestaurantImageProps {
  restaurant: Pick<Restaurant, "name" | "imageUrl">;
}

const RestaurantImage = ({ restaurant }: RestaurantImageProps) => {
  const router = useRouter();

  const handleBackClick = () => router.back();

  return (
    <div className="relative h-[275px] w-full">
      <Image
        src={restaurant.imageUrl}
        alt={restaurant.name}
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

      <Button
        size="icon"
        className="absolute right-2 top-2 rounded-full bg-gray-700"
      >
        <HeartIcon size={20} className="fill-white" />
      </Button>
    </div>
  );
};

export default RestaurantImage;
