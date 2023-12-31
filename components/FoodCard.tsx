"use client";
import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "utils";
import { Title } from "./Title";
import { useCart } from "context/CartProvider";
import { Product } from "models";
import toast from "react-hot-toast";

export const FoodCard = ({
  src,
  name,
  price,
  className,
  onClick,
}: {
  src: string;
  name: string;
  price: number;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const { setCart, meals } = useCart()!;
  const formatPrice = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(price);
  return (
    <motion.div
      data-test-id={`${name.replace(" ", "-").toLowerCase()}-card`}
      onClick={(e) => onClick && onClick(e)}
      variants={fadeIn("left", 12, 60)}
      className={`relative overflow-hidden rounded-lg bg-center bg-contain bg-no-repeat p-4 flex justify-between items-end h-48 lg:h-64 w-72 lg:w-96 bg-black ${className}`}
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <p
        data-test-id={`add-${name.replace(" ", "-").toLowerCase()}`}
        onClick={() => {
          const meal = meals.find(
            (x) => x.name.toLowerCase() === name.toLowerCase()
          );
          setCart((prev) => {
            console.table(meals);
            if (prev.length === 0 && meal) {
              toast.success("Item added to your cart");
              return [
                {
                  amount: 1,
                  id: meal.id,
                  img: meal.img,
                  name,
                  price: meal.price,
                },
                ...prev,
              ] as Product[];
            } else if (
              prev.filter((x) => x.name.toLowerCase() === name.toLowerCase())
                .length === 0 &&
              meal
            ) {
              toast.success("Item added to your cart");
              return [
                {
                  amount: 1,
                  id: meal.id,
                  img: meal.img,
                  name,
                  price: meal.price,
                },
                ...prev,
              ] as Product[];
            } else {
              toast.error("Item is already in your cart");
              return prev;
            }
          });
        }}
        className="text-white text-center rounded-[50%] absolute top-4 right-4 m-auto w-8 h-8 cursor-pointer opacity-100 bg-secondary text-xl hover:brightness-150 font-bold"
      >
        +
      </p>
      <Title level={3} className="text-white text-2xl">
        {name}
      </Title>
      <Title level={3} className="text-white text-2xl">
        {formatPrice}
      </Title>
    </motion.div>
  );
};
