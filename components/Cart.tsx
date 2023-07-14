"use client";

import React from "react";
import { Title } from "./Title";
import { useCart } from "context/CartProvider";
import styles from "../styles";
import { CartItem } from "./CartItem";
import Link from "next/link";

export const Cart = () => {
  const { cart } = useCart()!;
  return (
    <section className="flex flex-col gap-8 items-center w-full px-16 mb-32">
      <Title level={2} className={`${styles.title} text-primary`}>
        Your Cart
      </Title>
      <Link
        href="/menu"
        className="text-secondary place-self-center hover:text-opacity-100 transition-colors text-opacity-75 text-center font-bold self-start"
      >
        &larr;Back to the menu
      </Link>
      <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-8 h-[75vh] md:h-[50vh] overflow-y-scroll">
        {cart.length > 0 ? (
          cart.map((props) => <CartItem key={props.id} {...props} />)
        ) : (
          <>
            <h3
              className={`${styles.title} text-opacity-75 col-start-1 row-start-1 row-span-2 col-span-2 place-self-center text-secondary`}
            >
              Your cart is empty
            </h3>
          </>
        )}
      </div>
      {cart.length > 0 && (
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-xl font-bold text-primary text-center">
            Pairs of chopsticks
          </p>
          <p className="text-sm text-primary text-center">
            Up to 10 pairs it free, every additional pairs cost 25￥
          </p>
          <input
            min={0}
            defaultValue={1}
            type="number"
            className="border-2 border-secondary bg-background focus-within:bg-selected text-secondary rounded-lg p-2 outline-none"
          />
        </div>
      )}
    </section>
  );
};
