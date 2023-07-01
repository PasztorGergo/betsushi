"use client";
import { Scroller } from "components/Scroller";
import { Title } from "components/Title";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import styles from "../styles";
import { fadeIn, staggerContainer } from "utils";

const HomePage = () => {
  return (
    <>
      <header
        className={
          styles.padding +
          " h-[75vh] pt-16 w-full flex flex-col items-center justify-between mb-64"
        }
      >
        <div className="flex flex-col items-center justify-center gap-11">
          <Title
            className="text-center text-primary text-[64px] md:w-2/3 w-full"
            level={1}
          >
            Indulge in the Artistry of Authentic Japanese Sushi
          </Title>
          <Title className="text-center text-secondary text-[24px]" level={3}>
            A Culinary Journey to the Heart of Japan
          </Title>
        </div>
        <Scroller
          onClick={() => {
            window.scrollTo({ top: 700, behavior: "smooth" });
          }}
        ></Scroller>
      </header>
      <main>
        <section className="w-full flex flex-col items-center">
          <Title
            level={2}
            className="text-secondary text-center text-[clamp(32px,11vw,3rem)] mb-12"
          >
            About us
          </Title>
          <motion.div
            variants={staggerContainer()}
            whileInView="show"
            initial="hidden"
            viewport={{ once: false, amount: 0.25 }}
            className="relative grid grid-cols-2 w-full"
          >
            <motion.div
              variants={fadeIn("left", 12, 60)}
              className="aspect-square flex flex-col justify-center gap-8 bg-primary text-white col-start-1 row-start-1 p-8"
            >
              <p className="text-xl">
                Welcome to Betsushi, where passion for authentic Japanese
                cuisine meets culinary excellence. Nestled in the heart of
                Nagoya, our restaurant invites you on a gastronomic journey
                inspired by the rich traditions and artistry of Japan.
              </p>
              <p className="text-xl">
                At Betsushi, we are dedicated to crafting an exceptional dining
                experience that showcases the true essence of Japanese cuisine.
                With a focus on pristine ingredients, meticulous preparation,
                and attention to detail, our talented team of chefs takes great
                pride in presenting a menu that tantalizes both the palate and
                the senses.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 12, 60)}
              className="text-right flex flex-col justify-center gap-8 aspect-square bg-primary text-white col-start-2 row-start-2 p-8"
            >
              <p className="text-xl">
                From the delicate artistry of nigiri sushi to the sizzle of
                teppanyaki grills, our menu boasts a wide array of traditional
                and innovative dishes. Each creation is thoughtfully curated,
                drawing inspiration from the seasons and incorporating the
                finest locally sourced ingredients to ensure an unforgettable
                dining experience.
              </p>
              <p className="text-xl">
                Embracing the philosophy of omotenashi, the spirit of Japanese
                hospitality, we strive to provide impeccable service that
                exceeds your expectations. Our knowledgeable staff is delighted
                to guide you through the menu, suggest pairings with our
                extensive sake selection, and cater to any dietary preferences
                or restrictions.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 12, 60)}
              className="col-strat-2 row-start-1 grid place-items-center w-full h-full"
            >
              <Image
                src="/sushi-5.png"
                alt="Maki"
                width={762}
                height={780}
                className="md:w-1/2"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 12, 60)}
              className="col-strat-1 row-start-2 grid place-items-center w-full h-full"
            >
              <Image
                src="/sushi-4.png"
                alt="Sake"
                width={627}
                height={840}
                className="md:w-1/2"
              />
            </motion.div>
            <Image
              src="/Japanese_Imperial_Seal.svg"
              alt="Japanese Imperial Seal"
              width={206}
              height={206}
              className="absolute m-auto inset-0"
            />
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
