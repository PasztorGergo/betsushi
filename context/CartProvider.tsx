import { Product } from "models";
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext<
  | {
      cart: Array<Product>;
      setCard: React.Dispatch<React.SetStateAction<Product[]>>;
    }
  | undefined
>(undefined);

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCard] = useState<Array<Product>>([]);

  const value = {
    cart,
    setCard,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
