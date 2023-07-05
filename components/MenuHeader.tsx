"use client";
import React, { useEffect, useState } from "react";
import { Title } from "./Title";
import { RadioInput } from "./RadioInput";
import { RadioGroup } from "./RadioGroup";
import { Card } from "./Card";
import { FoodCard } from "./FoodCard";
import { fadeIn, staggerContainer } from "utils";
import { motion } from "framer-motion";
import styles from "../styles";
import Image from "next/image";

type Meals = "makis" | "nigiris" | "drinks" | "starters" | "soups";

export const MenuHeader = () => {
  const [selected, setSelected] = useState<Meals>();

  return (
    <header
      className={`${styles.padding} flex flex-col items-center justify-start mt-16 gap-8`}
    >
      <Title level={2} className={`${styles.title} text-secondary`}>
        Daily speciality
      </Title>
      <motion.div
        className="px-16 w-full flex justify-center items-center md:items-stretch gap-8 md:gap-0 md:justify-between md:flex-row flex-col"
        variants={staggerContainer()}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true }}
      >
        <FoodCard name="Zenbu Nigiri" price={959} src="/DailyOfferSushi.jpg" />
        <Title level={3} className="text-secondary text-6xl self-center">
          &
        </Title>
        <FoodCard name="Kenbishi sake" price={529} src="/kenbishi.png" />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 12, 60)}
        whileInView="show"
        initial="hidden"
      >
        <Title level={3} className="text-secondary text-2xl text-center mb-8">
          Select fro mthe categories
        </Title>
        <RadioGroup className="flex flex-wrap lg:flex-nowrap justify-center lg:items-stretch gap-8 px-4 md:px-16í">
          <RadioInput
            onChange={(e) => setSelected(e.target.id as Meals)}
            value="makis"
            name="meal"
            id="makis"
          >
            <Card
              className={`cursor-pointer transition-all aspect-square w-48 p-4 grid place-items-center h-48 ${
                selected === "makis" ? "bg-selected" : "bg-background"
              }`}
            >
              <Image
                src="/sushi-5.png"
                alt="Makis"
                width={760}
                height={780}
                className="w-24"
              />
              <Title level={4} className="text-secondary text-center text-lg">
                Makis
              </Title>
            </Card>
          </RadioInput>
          <RadioInput
            onChange={(e) => setSelected(e.target.id as Meals)}
            value="nigiris"
            name="meal"
            id="nigiris"
          >
            <Card
              className={`cursor-pointer transition-all aspect-square w-48 p-4 grid place-items-center h-48 ${
                selected === "nigiris" ? "bg-selected" : "bg-background"
              }`}
            >
              <Image
                src="/sushi-11.png"
                alt="Nigiris"
                width={643}
                height={479}
                className="w-24"
              />
              <Title level={4} className="text-secondary text-center text-lg">
                Nigiris
              </Title>
            </Card>
          </RadioInput>
          <RadioInput
            onChange={(e) => setSelected(e.target.id as Meals)}
            value="drinks"
            name="meal"
            id="drinks"
          >
            <Card
              className={`cursor-pointer transition-all aspect-square w-48 p-4 grid place-items-center h-48 ${
                selected === "drinks" ? "bg-selected" : "bg-background"
              }`}
            >
              <Image
                src="/sushi-4.png"
                alt="Drinks"
                width={627}
                height={840}
                className="w-24"
              />
              <Title level={4} className="text-secondary text-center text-lg">
                Drinks
              </Title>
            </Card>
          </RadioInput>
          <RadioInput
            onChange={(e) => setSelected(e.target.id as Meals)}
            value="starters"
            name="meal"
            id="starters"
          >
            <Card
              className={`cursor-pointer transition-all aspect-square w-48 p-4 grid place-items-center h-48 ${
                selected === "starters" ? "bg-selected" : "bg-background"
              }`}
            >
              <Image
                src="/sushi-7.png"
                alt="Starters"
                width={80}
                height={64}
                className="w-24"
              />
              <Title level={4} className="text-secondary text-center text-lg">
                Starters
              </Title>
            </Card>
          </RadioInput>
          <RadioInput
            onChange={(e) => setSelected(e.target.id as Meals)}
            value="soups"
            name="meal"
            id="soups"
          >
            <Card
              className={`cursor-pointer transition-all aspect-square w-48 p-4 grid place-items-center h-48 ${
                selected === "soups" ? "bg-selected" : "bg-background"
              }`}
            >
              <Image
                src="/sushi-10.png"
                alt="Soups"
                width={405}
                height={252}
                className="w-24"
              />
              <Title level={4} className="text-secondary text-center text-lg">
                Soups
              </Title>
            </Card>
          </RadioInput>
        </RadioGroup>
      </motion.div>
    </header>
  );
};
