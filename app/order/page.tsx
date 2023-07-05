"use client";

import React from "react";
import { Cart, OrderForm } from "@/components";
import CartProvider from "context/CartProvider";

const OrderPage = () => {
  return (
    <main>
      <CartProvider>
        <Cart />
      </CartProvider>
      <OrderForm />
    </main>
  );
};

export default OrderPage;
