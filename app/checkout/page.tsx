"use client";

import React, { useEffect, useState } from "react";
import { Appearance, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { OrderForm } from "components/OrderForm";
import { useCart } from "context/CartProvider";

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC || "");

const CheckoutPage = () => {
  const { cart } = useCart()!;
  const [clientSecret, setClientSecret] = useState<string>();

  useEffect(() => {
    fetch("/api/payment", {
      method: "POST",
      body: JSON.stringify({ items: cart }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        console.log(data);
      });
  }, []);

  const appearance: Appearance | undefined = {
    variables: {
      borderRadius: "0.5rem",
      colorPrimary: "#F47979",
      colorBackground: "#FDF9F2",
      colorText: "#186259",
      colorIcon: "#186259",
    },
  };

  return (
    clientSecret && (
      <Elements
        options={{ clientSecret, loader: "always", appearance }}
        stripe={stripePromise}
      >
        <OrderForm />
      </Elements>
    )
  );
};

export default CheckoutPage;
