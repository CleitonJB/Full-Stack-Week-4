import { db } from "../_lib/prisma";
import RestaurantItem from "./restaurant-item";

const RestaurantList = async () => {
  const restaurants = await db.restaurant.findMany({});

  return (
    <div className="[&:: -webkit-scrollbar]:hidden flex gap-4 overflow-x-scroll px-5">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
