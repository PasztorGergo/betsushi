"use client";

import React, { useState } from "react";
import { RadioGroup } from "./RadioGroup";
import { RadioInput } from "./RadioInput";
import styles from "../styles";
import { Title } from "./Title";
import { Card } from "./Card";
import { RiBankCardLine, RiMoneyCnyCircleLine } from "react-icons/ri";
import { Button } from "./Button";
import { useForm } from "react-hook-form";

export const OrderForm = () => {
  const { register, handleSubmit } = useForm();
  const [postCode, setPostCode] = useState<string>("");
  const [payment, setPayment] = useState<"card_present" | "card">();

  const submit = (data: unknown) => {};

  return (
    <>
      <Title className={`${styles.title} text-primary`} level={2}>
        Fill in the form
      </Title>
      <form
        onSubmit={handleSubmit(submit)}
        className={`${styles.padding} flex flex-col items-center gap-8`}
      >
        <div className="flex justify-start">
          <div className="border-2 border-y-primary overflow-hidden border-l-primary rounded-l-lg">
            <span className="bg-primary h-full p-2 text-white">〒</span>
            <input
              placeholder="Post number"
              className="outline-none border-none focus:bg-slate-100 transition-all p-1"
              type="text"
              value={postCode}
              onChange={(e) => {
                if (
                  e.target.value.length === 4 &&
                  !e.target.value.includes("-")
                ) {
                  setPostCode((prev) => (prev += "-"));
                } else {
                  setPostCode(e.target.value);
                }
              }}
            />
          </div>
          <span className="border-y-2 p-1 border-y-primary bg-white">
            Aichi, Nagoya,
          </span>
          <input
            placeholder="Ward"
            className="border-y-2 p-1 outline-none focus:bg-slate-100 transition-all border-y-primary bg-white"
            type="text"
            {...register("ward")}
          />
          <span className="border-y-2 p-1 border-y-primary bg-white">,</span>
          <input
            placeholder="Subarea-Block-Number"
            className="border-y-2 p-1 outline-none focus:bg-slate-100 transition-all border-y-primary border-r-primary border-r-2 rounded-r-lg bg-white"
            type="text"
            {...register("subarea")}
          />
        </div>
        <div className="flex justify-start">
          <input
            placeholder="Surname"
            className="border-y-2 border-l-2 rounded-l-lg p-1 outline-none focus:bg-slate-100 transition-all border-y-primary border-l-primary bg-white"
            type="text"
            {...register("surname")}
          />
          <input
            placeholder="Given name"
            className="border-y-2 p-1 outline-none focus:bg-slate-100 transition-all border-y-primary border-r-primary border-r-2 rounded-r-lg bg-white"
            type="text"
            {...register("givenname")}
          />
        </div>
        <h3 className="text-primary text-2xl">Choose Your payment method</h3>
        <RadioGroup className="flex flex-col gap-8">
          <RadioInput
            onChange={(e) => {
              setPayment(e.target.value as "card" | "card_present");
            }}
            value="card"
            name="payment"
            id="card"
          >
            <Card
              className={`${
                payment === "card" ? "bg-selected" : "bg-background"
              } text-secondary transition-colors cursor-pointer gap-4 p-4 grid grid-cols-[4rem_1fr] grid-rows-2]`}
            >
              <RiBankCardLine className="text-[64px] col-start-1 row-span-2 row-start-1" />
              <h3 className="text-secondary uppercase font-bold text-sm col-start-2 row-start-1">
                Card
              </h3>
              <p className="text-base col-start-2 row-start-2">
                Purchase your food by card using Stripe
              </p>
            </Card>
          </RadioInput>
          <RadioInput
            onChange={(e) => {
              setPayment(e.target.value as "card" | "card_present");
            }}
            value="card_present"
            name="payment"
            id="card_present"
          >
            <Card
              className={`${
                payment === "card_present" ? "bg-selected" : "bg-background"
              } text-secondary transition-colors cursor-pointer gap-4 p-4 grid grid-cols-[4rem_1fr] grid-rows-2]`}
            >
              <RiMoneyCnyCircleLine className="text-[64px] col-start-1 row-span-2 row-start-1" />
              <h3 className="text-secondary uppercase font-bold text-sm col-start-2 row-start-1">
                Cash on delivery
              </h3>
              <p className="text-base col-start-2 row-start-2">
                Pay in cash or by card when your meal gets delivered
              </p>
            </Card>
          </RadioInput>
        </RadioGroup>
        <Button type="submit">Order</Button>
      </form>
    </>
  );
};
