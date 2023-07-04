"use client";
import { motion, useInView, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Title } from "./Title";
import styles from "../styles";
import { Map } from "./Map";

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
    <section id="location">
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
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1">
        <div className="p-8 bg-primary col-start-1 flex flex-col items-center justify-center gap-4 text-center text-white aspect-square">
          <Title className={styles.title} level={3}>
            But where is the restaurant?
          </Title>
          <p className="font-bold">
            X-chōme-X Noritakeshinmachi, Nishi Ward, Nagoya, Aichi 451-0051,
            Japan
          </p>
          <p className="font-bold">
            Don&apos;t forget to reserve a table through phone
          </p>
          <p className="font-bold">+81 52 XXX XXXX</p>
        </div>
        <div className="w-full h-full aspect-square col-start-1 md:col-start-2">
          <Map />
        </div>
      </div>
    </section>
  );
};
