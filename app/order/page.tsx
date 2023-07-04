"use client";

import { Title } from "components/Title";
import React from "react";
import { Cart, RadioGroup, RadioInput } from "@/components";
import CartProvider from "context/CartProvider";

const OrderPage = () => {
  return (
    <main>
      <CartProvider>
        <Cart />
      </CartProvider>
      <div className=""></div>
      <form>
        <div className="flex justify-start">
          <input type="text" />
          {/*
            after typing the first 3 chars put a dash
        */}
          <span>Aichi, Nagoya,</span>
          <input type="text" />
          <span>,</span>
          <input type="text" />
        </div>
        <RadioGroup>
          <RadioInput onChange={() => {}} value="card" name="d" id="s">
            d
          </RadioInput>
        </RadioGroup>
      </form>
    </main>
  );
};

export default OrderPage;
