import { Product } from "models";
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext<
  | {
      cart: Array<Product>;
      setCart: React.Dispatch<React.SetStateAction<Product[]>>;
    }
  | undefined
>(undefined);

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Array<Product>>([
    {
      amount: 1,
      id: "price_1NQsqhAlaM3JXMGCzVmQH2u0",
      img: "/DailyOfferSushi.jpg",
      name: "Zenbu Nigiri",
      price: 959,
    },
  ]);

  const value = {
    cart,
    setCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
