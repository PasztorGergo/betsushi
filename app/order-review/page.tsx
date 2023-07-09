"use client";

import styles from "@/styles/index";
import { Button } from "components/Button";
import { Title } from "components/Title";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { useRouter, useSearchParams } from "next/navigation";
import { Order } from "@stripe/stripe-js";
import { useCart } from "context/CartProvider";

const OrderReview = () => {
  const searchParams = useSearchParams();
  const stripe = useStripe();
  const [orderData, setOrderData] = useState<Order>();
  const { setCart } = useCart()!;
  const router = useRouter();

  useEffect(() => {
    if (!searchParams?.get("clientSecret")) {
      router.replace("/");
    } else {
      stripe
        ?.retrieveOrder(searchParams?.get("clientSecret")!)
        .then((x) => setOrderData(x.order));

      setCart([]);
    }
  }, []);
  return (
    <main className="flex flex-col items-center">
      <Title level={2} className={`${styles.title} text-secondary`}>
        Your order is on the way
      </Title>
      <p>
        Thank you for ordering from our restaurant. Your meal will be ready to
        go soon.
      </p>
      <h3 className="text-secondary text-l font-bold text-center">
        Order review
      </h3>
      <Button>
        <Link href="/">Back to home</Link>
      </Button>
    </main>
  );
};

export default OrderReview;
