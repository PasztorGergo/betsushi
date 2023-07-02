"use client";
import { motion, useInView, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";

export const Location = () => {
  const ratings = useSpring(0, { damping: 20, stiffness: 40 });
  const dailyOrders = useSpring(0, { damping: 20, stiffness: 40 });
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      ratings.set(4.8);
      dailyOrders.set(25);
    }
  }, [isInView]);

  return (
    <section>
      <div
        ref={ref}
        className="bg-white flex justify-center items-center gap-12"
      >
        <div className="text-center p-8">
          <motion.p className="font-bold text-xl text-secondary">
            {ratings}
          </motion.p>
          <p className="text-sm font-bold uppercase text-secondary">
            Google maps rating
          </p>
        </div>
        <div className="text-center p-8">
          <motion.p className="font-bold text-xl text-secondary">
            {dailyOrders}
          </motion.p>
          <p className="text-sm font-bold uppercase text-secondary">
            Daily orders
          </p>
        </div>
      </div>
    </section>
  );
};
