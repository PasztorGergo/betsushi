"use client";

import React, { useEffect, useReducer } from "react";
import { Card } from "./Card";
import Image from "next/image";
import { Product } from "models";
import { Title } from "./Title";
import { RiCloseLine } from "react-icons/ri";
import { useCart } from "context/CartProvider";

const currencyFormatter = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
});

export const CartItem = ({ ...props }: Product) => {
  const { setCart, cart } = useCart()!;
  const [state, dispatch] = useReducer(
    (state: { amount: number }, action: "increase" | "decrease") => {
      if (action === "increase") {
        return {
          amount: state.amount + 1,
        };
      } else {
        return {
          amount: state.amount - 1 < 1 ? 1 : state.amount - 1,
        };
      }
    },
    { amount: props.amount }
  );

  useEffect(() => {
    const searchIndex = cart.findIndex((x) => x.id === props.id);
    cart[searchIndex].amount = state.amount;
  }, [state]);

  return (
    <Card className="p-4 w-full grid grid-rows-2 gap-8 grid-cols-[8rem_1fr] relative">
      <Image
        className="col-start-1 row-span-2 row-start-1 place-self-center max-w-[8rem] max-h-32 object-contain"
        src={props.img}
        alt={props.name}
        width={128}
        height={128}
      />
      <div className="row-start-1 col-start-2 text-secondary ">
        <h3 className="font-bold text-2xl">{props.name}</h3>
        <p className="text-base">
          {currencyFormatter.format(state.amount * props.price)}
        </p>
      </div>
      <div className="max-w-fit flex justify-center row-start-2 col-start-2">
        <button
          onClick={() => dispatch("decrease")}
          className="bg-primary rounded-l-lg text-white text-center text-2xl p-3"
        >
          <Title level={6}>-</Title>
        </button>
        <input
          type="number"
          className="bg-white border-none outline-none focus-within:ring-primary w-12 text-center"
          defaultValue={props.amount}
          value={state.amount}
          min={1}
          readOnly
        />
        <button
          onClick={() => dispatch("increase")}
          className="bg-primary rounded-r-lg text-white text-center text-2xl p-3"
        >
          <Title level={6}>+</Title>
        </button>
      </div>
      <RiCloseLine
        className="cursor-pointer text-secondary text-[32px] absolute top-4 hover:brightness-150 right-4"
        onClick={() => {
          setCart((prev) => [...prev.filter((x) => x.id !== props.id)]);
        }}
      />
    </Card>
  );
};
