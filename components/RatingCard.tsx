"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "utils";

export const RatingCard = () => {
  return (
    <motion.div
      variants={fadeIn("up", 12, 60)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className="md:max-w-[30%] w-full gap-4 p-4 grid [grid-template-rows:4rem_1fr] [grid-template-columns:4rem_1fr] bg-white rounded-lg"
    >
      <Image
        src="https://thispersondoesnotexist.com"
        alt="someone"
        width={64}
        height={64}
        className="rounded-[50%] aspect-square col-start-1 row-start-1"
      />
      <h3 className="font-bold text-lg text-secondary col-start-2 row-start-1">
        Human name
      </h3>
      <p className="col-start-1 row-start-2 col-span-2 text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor
        nec risus ut congue. Sed pulvinar nulla in tortor congue, et cursus nunc
        molestie. Praesent vitae porttitor sem. Nam quis neque ut est
        scelerisque lobortis.
      </p>
    </motion.div>
  );
};
