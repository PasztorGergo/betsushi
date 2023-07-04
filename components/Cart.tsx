"use client";

import React from "react";
import { Title } from "./Title";
import { useCart } from "context/CartProvider";
import styles from "../styles";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cart, setCard } = useCart()!;
  return (
    <section>
      <Title level={2} className={`${styles.title} text-primary`}>
        Your Cart
      </Title>
      <CartItem
        amount={1}
        id="yes"
        img="/sushi-10.png"
        name="Sushi"
        price={959}
        key="i"
      />
    </section>
  );
};
