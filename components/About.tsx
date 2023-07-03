"use client";

import { motion } from "framer-motion";
import React from "react";
import { fadeIn, staggerContainer } from "utils";
import { Title } from "./Title";
import styles from "../styles";
import Image from "next/image";

export const About = () => {
  return (
    <section className="w-full flex flex-col items-center mb-32 md:mb-64">
      <Title
        level={2}
        className={`text-secondary text-center mb-12 ${styles.title}`}
      >
        About us
      </Title>
      <motion.div
        variants={staggerContainer()}
        whileInView="show"
        initial={window.innerWidth > 768 ? "hidden" : "show"}
        viewport={{ once: false, amount: 0.25 }}
        className="relative grid grid-cols-1 md:grid-cols-2 w-full"
      >
        <motion.div
          variants={fadeIn("left", 12, 60)}
          className="aspect-square flex flex-col justify-center gap-8 bg-primary text-white col-start-1 row-start-1 p-8"
        >
          <p className="text-xl">
            Welcome to Betsushi, where passion for authentic Japanese cuisine
            meets culinary excellence. Nestled in the heart of Nagoya, our
            restaurant invites you on a gastronomic journey inspired by the rich
            traditions and artistry of Japan.
          </p>
          <p className="text-xl">
            At Betsushi, we are dedicated to crafting an exceptional dining
            experience that showcases the true essence of Japanese cuisine. With
            a focus on pristine ingredients, meticulous preparation, and
            attention to detail, our talented team of chefs takes great pride in
            presenting a menu that tantalizes both the palate and the senses.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 12, 60)}
          className="text-right flex flex-col justify-center gap-8 aspect-square bg-primary text-white md:col-start-2 md:row-start-2 row-start-3 col-start-1 p-8"
        >
          <p className="text-xl">
            From the delicate artistry of nigiri sushi to the sizzle of
            teppanyaki grills, our menu boasts a wide array of traditional and
            innovative dishes. Each creation is thoughtfully curated, drawing
            inspiration from the seasons and incorporating the finest locally
            sourced ingredients to ensure an unforgettable dining experience.
          </p>
          <p className="text-xl">
            Embracing the philosophy of omotenashi, the spirit of Japanese
            hospitality, we strive to provide impeccable service that exceeds
            your expectations. Our knowledgeable staff is delighted to guide you
            through the menu, suggest pairings with our extensive sake
            selection, and cater to any dietary preferences or restrictions.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 12, 60)}
          className="md:col-strat-2 aspect-square md:row-start-1 row-start-2 grid place-items-center w-full h-full"
        >
          <Image
            src="/sushi-5.png"
            alt="Maki"
            width={762}
            height={780}
            className="w-1/2"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 12, 60)}
          className="col-strat-1 aspect-square md:row-start-2 row-start-4 grid place-items-center w-full h-full"
        >
          <Image
            src="/sushi-4.png"
            alt="Sake"
            width={627}
            height={840}
            className="w-1/2"
          />
        </motion.div>
        <Image
          src="/Japanese_Imperial_Seal.svg"
          alt="Japanese Imperial Seal"
          width={206}
          height={206}
          className="absolute m-auto inset-0 md:block hidden"
        />
      </motion.div>
    </section>
  );
};
