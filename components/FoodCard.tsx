"use client";
import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "utils";
import { Title } from "./Title";

export const FoodCard = ({
  src,
  name,
  price,
}: {
  src: string;
  name: string;
  price: number;
}) => {
  const localPrice = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(price);
  return (
    <motion.div
      variants={fadeIn("left", 12, 60)}
      className={`rounded-lg bg-center bg-contain bg-no-repeat p-4 flex justify-between items-end h-64 w-96 bg-black`}
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <Title level={3} className="text-white text-2xl">
        {name}
      </Title>
      <Title level={3} className="text-white text-2xl">
        {localPrice}
      </Title>
    </motion.div>
  );
};