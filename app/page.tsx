import { db } from "./_lib/prisma";
import Header from "./_components/header";
import Search from "./_components/search";
import CategoryList from "./_components/category-list";
import ProductList from "./_components/product-list";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import PromoBanner from "./_components/promo-banner";

const Home = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <>
      <Header />

      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6">
        <PromoBanner src="/promo-banner-01.png" alt="banner de promoção 01" />
      </div>

      <div className="space-y-4 pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>

          <Button
            variant="ghost"
            className="h-fit p-0 text-primary hover:bg-transparent"
          >
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>

        <ProductList products={products} />
      </div>

      <div className="px-5 pt-6">
        <PromoBanner src="/promo-banner-02.png" alt="banner de promoção 02" />
      </div>
    </>
  );
};

export default Home;
