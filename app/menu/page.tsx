"use client";

import { FoodCard, MenuHeader, Title } from "@/components";
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
        {meals.filter((x) => x.type === category).length > 0 ? (
          meals.map(
            ({ id, img, type, ...props }) =>
              type === category && <FoodCard {...props} src={img} key={id} />
          )
        ) : (
          <Title
            level={3}
            className={`${styles.title} text-secondary text-opacity-75 w-full`}
          >
            No items were found
            <br></br>
            (╯︵╰,)
          </Title>
        )}
      </main>
    </>
  );
};

export default MenuPage;
