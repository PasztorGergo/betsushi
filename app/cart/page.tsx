"use client";

import React from "react";
import { Button, Cart } from "@/components";
import Link from "next/link";
import { useCart } from "context/CartProvider";

const OrderPage = () => {
  const { cart } = useCart()!;
  return (
    <>
      <main className="flex flex-col items-center gap-4">
        <Cart />
        {cart.length > 0 && (
          <Button role="checkout" className="self-center overflow-hidden">
            <Link href="/checkout" className="w-full h-full">
              Checkout
            </Link>
          </Button>
        )}
      </main>
    </>
  );
};

export default OrderPage;
