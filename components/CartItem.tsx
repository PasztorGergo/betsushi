"use client";

import React from "react";
import { Card } from "./Card";
import Image from "next/image";
import { Product } from "models";
import { Title } from "./Title";

export const CartItem = ({ ...props }: Product) => {
  return (
    <Card>
      <Image src={props.img} alt={props.name} width={128} height={128} />
      <h3 className="font-bold text-base text-secondary">{props.name}</h3>
      <div className="max-w-fit flex justify-center">
        <button className="bg-primary rounded-l-lg text-white text-center text-2xl p-3">
          <Title level={6}>-</Title>
        </button>
        <input
          type="number"
          className="bg-white border-none outline-none focus-within:ring-primary"
          defaultValue={1}
          min={1}
        />
        <button className="bg-primary rounded-r-lg text-white text-center text-2xl p-3">
          <Title level={6}>+</Title>
        </button>
      </div>
    </Card>
  );
};
