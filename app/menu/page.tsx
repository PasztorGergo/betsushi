"use client";

import { FoodCard, MenuHeader } from "@/components";
import styles from "@/styles/index";
import { useCart } from "context/CartProvider";
import React from "react";

const MenuPage = () => {
  const { category, meals } = useCart()!;
  return (
    <>
      <MenuHeader />
      <main
        className={`${styles.padding} flex flex-wrap items-center justify-start gap-8 content-center mt-12`}
      >
        {meals.map(
          ({ id, img, type, ...props }) =>
            type === category && <FoodCard {...props} src={img} key={id} />
        )}
      </main>
    </>
  );
};

export default MenuPage;
