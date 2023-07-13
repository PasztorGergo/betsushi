"use client";

import styles from "@/styles/index";
import { Button } from "components/Button";
import { Title } from "components/Title";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "context/CartProvider";
import { Card } from "@/components";

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
    if (searchParams?.has("payment_intent")) {
      fetch(`/api/getPaymentById?id=${searchParams?.get("payment_intent")}`, {
        method: "GET",
      })
        .then((x) => x.json())
        .then(({ data }) => {
          console.log(data);
          const { name, total, address, phone } = data;
          setOrderData({
            total,
            items: cart.map(({ name }) => name).join(", "),
            address,
            name,
            phoneNumber: phone,
          });
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
      <p className="text-secondary text-center">
        Thank you for ordering from our restaurant. Your meal will be ready to
        go soon.
      </p>
      <h3 className="text-secondary text-l font-bold text-center">
        Order review
      </h3>
      <Card>
        <ul className="grid grid-cols-[12rem_1fr] text-secondary grid-rows-5 group rounded-lg p-4 gap-2">
          <li className="bg-background font-bold col-start-1 row-start-1">
            Name
          </li>
          <li className="bg-background font-bold col-start-1 row-start-2">
            Phone number
          </li>
          <li className="bg-background font-bold col-start-1 row-start-3">
            Address
          </li>
          <li className="bg-background font-bold col-start-1 row-start-4">
            Items
          </li>
          <li className="bg-background font-bold col-start-1 row-start-5">
            Total
          </li>
          <li className="bg-background  col-start-2 row-start-1">
            {orderData?.name}
          </li>
          <li className="bg-background  col-start-2 row-start-2">
            {orderData?.phoneNumber}
          </li>
          <li className="bg-background  col-start-2 row-start-3">
            {orderData?.address}
          </li>
          <li className="bg-background  col-start-2 row-start-4">
            {orderData?.items}
          </li>
          <li className="bg-background  col-start-2 row-start-5">
            {formatter.format(orderData?.total || 0)}
          </li>
        </ul>
      </Card>
      <Button>
        <Link href="/">Back to home</Link>
      </Button>
    </main>
  );
};

export default OrderReview;
