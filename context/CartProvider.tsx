import { Category, Meals, Product } from "models";
import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext<
  | {
      cart: Array<Product>;
      setCart: React.Dispatch<React.SetStateAction<Product[]>>;
      category: Category;
      setCategory: React.Dispatch<React.SetStateAction<Category>>;
    }
  | undefined
>(undefined);

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Array<Product>>([]);
  const [category, setCategory] = useState<Category>("makis");

  const value = {
    cart,
    setCart,
    category,
    setCategory,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
