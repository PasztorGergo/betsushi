"use client";

import React, { useReducer } from "react";
import { Card } from "./Card";
import Image from "next/image";
import { Product } from "models";
import { Title } from "./Title";

export const CartItem = ({ ...props }: Product) => {
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
  return (
    <Card>
      <Image src={props.img} alt={props.name} width={128} height={128} />
      <h3 className="font-bold text-base text-secondary">{props.name}</h3>
      <div className="max-w-fit flex justify-center">
        <button
          onClick={() => dispatch("decrease")}
          className="bg-primary rounded-l-lg text-white text-center text-2xl p-3"
        >
          <Title level={6}>-</Title>
        </button>
        <input
          type="number"
          className="bg-white border-none outline-none focus-within:ring-primary"
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
    </Card>
  );
};
