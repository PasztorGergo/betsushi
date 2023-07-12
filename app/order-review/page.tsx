"use client";

import styles from "@/styles/index";
import { Button } from "components/Button";
import { Title } from "components/Title";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "context/CartProvider";

const OrderReview = () => {
  const [orderData, setOrderData] = useState<{
    total: number;
    items: string;
    address: string;
    phoneNumber: string;
    name: string;
  }>();
  const { setCart, cart } = useCart()!;
  const formatter = new Intl.NumberFormat("ja-JP", {
    currency: "JPY",
    style: "currency",
  });
  const searchParams = useSearchParams();

  useEffect(() => {
    fetch("/api/getPaymentById", {
      method: "POST",
      body: JSON.stringify({
        id: searchParams?.get("payment_intent"),
      }),
    })
      .then((x) => x.json())
      .then(({ data }) => {
        const { name, total, address, phone } =
          data.paymentsCollection.edges[0].node;
        setOrderData({
          total,
          items: cart.map(({ name }) => name).join(", "),
          address,
          name,
          phoneNumber: phone,
        });
      });

    setCart([]);
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
      <ul className="grid grid-cols-2 grid-rows-5 group rounded-lg p-4 border border-primary">
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
          Items
        </li>
        <li className="bg-background divide-primary divide-opacity-50 group-odd:bg-selected col-start-1 row-start-5">
          Total
        </li>
        <li className="bg-background divide-primary divide-opacity-50 group-odd:bg-selected col-start-2 row-start-1">
          {orderData?.name}
        </li>
        <li className="bg-background divide-primary divide-opacity-50 group-odd:bg-selected col-start-2 row-start-3">
          {orderData?.phoneNumber}
        </li>
        <li className="bg-background divide-primary divide-opacity-50 group-odd:bg-selected col-start-2 row-start-2">
          {orderData?.address}
        </li>
        <li className="bg-background divide-primary divide-opacity-50 group-odd:bg-selected col-start-2 row-start-4">
          {formatter.format(orderData?.total || 0)}
        </li>
        <li className="bg-background divide-primary divide-opacity-50 group-odd:bg-selected col-start-2 row-start-5">
          {formatter.format(orderData?.total || 0)}
        </li>
      </ul>
      <Button>
        <Link href="/">Back to home</Link>
      </Button>
    </main>
  );
};

export default OrderReview;
