import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import ProductImage from "./_components/product-image";
import ProductDetails from "./_components/product-details";

interface ProductpageProps {
  params: {
    id: string;
  };
}

const Productpage = async ({ params: { id } }: ProductpageProps) => {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      restaurant: true,
    },
  });

  if (!product) return notFound();

  const juices = await db.product.findMany({
    where: {
      category: {
        name: "Sucos",
      },
      restaurant: {
        id: product.restaurant.id,
      },
    },
    include: {
      restaurant: true,
    },
  });

  return (
    <div>
      <ProductImage product={product} />

      <ProductDetails product={product} complementaryProducts={juices} />
    </div>
  );
};

export default Productpage;
