"use client";
import { motion, useInView, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";

export const Location = () => {
  const ratings = useSpring(0, { damping: 10, stiffness: 40 });
  const dailyOrders = useSpring(0, {
    damping: 10,
    stiffness: 40,
  });
  const ref = useRef<HTMLDivElement>(null);
  const dailyRef = useRef(null);
  const ratingsRef = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      ratings.set(4.8);
      dailyOrders.set(25);
    } else {
      ratings.set(0);
      dailyOrders.set(0);
    }
  }, [isInView]);

  useEffect(() => {
    ratings.on("change", (latest) => {
      if (ratingsRef.current) {
        //@ts-ignore
        ratingsRef.current.textContent = Intl.NumberFormat("en-US").format(
          latest.toFixed(1)
        );
      }
    });
  }, [ratings]);

  useEffect(() => {
    dailyOrders.on("change", (latest) => {
      if (ratingsRef.current) {
        //@ts-ignore
        dailyRef.current.textContent = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        );
      }
    });
  }, [dailyOrders]);

  return (
    <section>
      <div
        ref={ref}
        className="bg-white flex justify-center items-center gap-12"
      >
        <div className="text-center p-8">
          <p className="font-bold text-xl text-secondary" ref={ratingsRef}></p>
          <p className="text-sm font-bold uppercase text-secondary">
            Google maps rating
          </p>
        </div>
        <div className="text-center p-8">
          <p className="font-bold text-xl text-secondary" ref={dailyRef}></p>
          <p className="text-sm font-bold uppercase text-secondary">
            Daily orders
          </p>
        </div>
      </div>
    </section>
  );
};
