"use client";

import { FoodCard, MenuHeader } from "@/components";
import { useCart } from "context/CartProvider";
import React from "react";

const MenuPage = () => {
  const { category, meals } = useCart()!;
  return (
    <>
      <MenuHeader />
      <main>
        {meals.map(
          ({ id, img, type, ...props }) =>
            type === category && <FoodCard {...props} src={img} key={id} />
        )}
      </main>
    </>
  );
};

export default MenuPage;
