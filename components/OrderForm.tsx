"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles";
import { Title } from "./Title";
import { Button } from "./Button";
import {
  PaymentElement,
  useStripe,
  useElements,
  AddressElement,
  LinkAuthenticationElement,
} from "@stripe/react-stripe-js";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export const OrderForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState<string>("");

  const [clientSecret, setClientSecret] = useState<string>("");
  const params = useSearchParams();
  const [address, setAddress] = useState<{
    name: string;
    firstName?: string | undefined;
    lastName?: string | undefined;
    address: {
      line1: string;
      line2: string | null;
      city: string;
      state: string;
      postal_code: string;
      country: string;
    };
    phone?: string | undefined;
  }>();

  const [message, setMessage] = React.useState<string>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = params?.get("payment_intent_client_secret");

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://betsushi.vercel.app/order-review",
        receipt_email: email,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <>
      <Title className={`${styles.title} text-primary`} level={2}>
        Fill in the form
      </Title>
      <form
        onSubmit={onSubmit}
        className={`${styles.padding} flex flex-col items-center gap-8`}
        id="payment-form"
      >
        <LinkAuthenticationElement
          onChange={(e) => {
            setEmail(e.value.email);
          }}
          id="email"
        />
        <AddressElement
          options={{
            mode: "shipping",
            allowedCountries: ["JP"],
            fields: { phone: "always" },
          }}
          onChange={(e) => {
            setAddress(e.value);
          }}
          id="adress"
        />
        <PaymentElement
          id="payment-element"
          options={{
            layout: "tabs",
          }}
        />
        <Button role="payment" id="submit" type="submit">
          {isLoading ? (
            <div className="spinner" id="spinner">
              <Image
                className="animate-spin"
                src="/Japanese_Imperial_Seal.svg"
                alt="loader"
                width={24}
                height={24}
              />
            </div>
          ) : (
            <span id="button-text">Order</span>
          )}
        </Button>
        {message && <div id="payment-message">{message}</div>}
      </form>
    </>
  );
};
