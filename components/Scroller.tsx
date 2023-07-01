"use client";
import { motion } from "framer-motion";
import React from "react";

export const Scroller = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={
        "flex flex-col items-center justify-center gap-4 cursor-pointer " +
        props.className
      }
      {...props}
    >
      <div className="p-1 border-2 border-primary rounded-full h-12">
        <motion.div
          className="rounded-[50%] bg-primary w-4 h-4"
          initial={{ y: "0%" }}
          animate={{
            y: ["0%", "100%"],
            transition: {
              type: "tween",
              duration: 0.75,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        ></motion.div>
      </div>
      <p className="text-secondary text-sm uppercase text-center font-bold">
        Scroll to learn more
      </p>
    </div>
  );
};
