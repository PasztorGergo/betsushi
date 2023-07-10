"use client";

import styles from "@/styles/index";
import { Button } from "components/Button";
import { Title } from "components/Title";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter, useSearchParams } from "next/navigation";
import { Order } from "@stripe/stripe-js";
import { useCart } from "context/CartProvider";

const OrderReview = () => {
  const stripe = loadStripe(process.env.STRIPE_PUBLIC || "");
  const searchParams = useSearchParams();
  const [orderData, setOrderData] = useState<Order>();
  const { setCart, cart } = useCart()!;
  const router = useRouter();
  const formatter = new Intl.NumberFormat("ja-JP", {
    currency: "JPY",
    style: "currency",
  });

  useEffect(() => {
    if (!searchParams?.get("payment_intent")) {
      router.replace("/");
    } else {
      fetch("/api/payment", {
        method: "POST",
        body: JSON.stringify({ items: cart }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          stripe.then((x) =>
            x
              ?.retrieveOrder(data.clientSecret)
              .then((y) => setOrderData(y.order))
          );
        });

      setCart([]);
    }
  }, []);
  return (
    <main
      className={`flex flex-col items-center h-full gap-8 w-full ${styles.padding}`}
    >
      <Title level={2} className={`${styles.title} text-primary`}>
        Your order is on the way
      </Title>
      <p className="text-secondary">
        Thank you for ordering from our restaurant. Your meal will be ready to
        go soon.
      </p>
      <h3 className="text-secondary text-l font-bold text-center">
        Order review
      </h3>
      <ul className="grid grid-cols-2 grid-rows-4 group rounded-lg p-4 border border-primary">
        <li className="bg-background divide-primary divide-opacity-50 group-odd:bg-selected col-start-1 row-start-1">
          Name
        </li>
        <li className="bg-background divide-primary divide-opacity-50 group-odd:bg-selected col-start-1 row-start-2">
          Phone number
        </li>
        <li className="bg-background divide-primary divide-opacity-50 group-odd:bg-selected col-start-1 row-start-3">
          Address
        </li>

        <li className="bg-background divide-primary divide-opacity-50 group-odd:bg-selected col-start-1 row-start-4">
          Total
        </li>
        <li className="bg-background divide-primary divide-opacity-50 group-odd:bg-selected col-start-2 row-start-1">
          {orderData?.shipping_details?.name}
        </li>
        <li className="bg-background divide-primary divide-opacity-50 group-odd:bg-selected col-start-2 row-start-3"></li>
        <li className="bg-background divide-primary divide-opacity-50 group-odd:bg-selected col-start-2 row-start-2">
          〒{orderData?.shipping_details?.address?.postal_code},{" "}
          {orderData?.shipping_details?.address?.state}{" "}
          {orderData?.shipping_details?.address?.city},{" "}
          {orderData?.shipping_details?.address?.line1},{" "}
          {orderData?.shipping_details?.address?.line2}
        </li>
        <li className="bg-background divide-primary divide-opacity-50 group-odd:bg-selected col-start-2 row-start-4">
          {formatter.format(orderData?.amount_total || 0)}
        </li>
      </ul>
      <Button>
        <Link href="/">Back to home</Link>
      </Button>
    </main>
  );
};

export default OrderReview;
