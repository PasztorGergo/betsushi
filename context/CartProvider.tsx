import { Category, Meals, Product } from "models";
import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext<
  | {
      cart: Array<Product>;
      setCart: React.Dispatch<React.SetStateAction<Product[]>>;
      category: Category;
      setCategory: React.Dispatch<React.SetStateAction<Category>>;
      meals: Array<Meals>;
    }
  | undefined
>(undefined);

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const meals: Array<Meals> = useMemo(
    (): Array<Meals> => [
      {
        id: "price_1NQsqhAlaM3JXMGCzVmQH2u0",
        img: "/DailyOfferSushi.jpg",
        name: "Zenbu Nigiri",
        price: 959,
        type: "nigiri",
      },
      {
        id: "price_1NRCwrAlaM3JXMGCQkM5t7RQ",
        img: "/kenbishi.jpg",
        name: "Kenbishi Sake",
        price: 529,
        type: "drinks",
      },
    ],
    []
  );
  const [cart, setCart] = useState<Array<Product>>([]);
  const [category, setCategory] = useState<Category>("makis");

  const value = {
    cart,
    setCart,
    category,
    setCategory,
    meals,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
