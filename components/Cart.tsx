"use client";

import React from "react";
import { Title } from "./Title";
import { useCart } from "context/CartProvider";
import styles from "../styles";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cart, setCard } = useCart()!;
  return (
    <section className="flex flex-col gap-8 items-center w-full px-16 mb-32">
      <Title level={2} className={`${styles.title} text-primary`}>
        Your Cart
      </Title>
      <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-8">
        <CartItem
          amount={1}
          id="yes"
          img="/sushi-10.png"
          name="Sushi"
          price={959}
          key="i"
        />
        <CartItem
          amount={1}
          id="yes"
          img="/sushi-10.png"
          name="Sushi"
          price={959}
          key="ih"
        />
        <CartItem
          amount={1}
          id="yes"
          img="/sushi-10.png"
          name="Sushi"
          price={959}
          key="ij"
        />
      </div>
    </section>
  );
};
