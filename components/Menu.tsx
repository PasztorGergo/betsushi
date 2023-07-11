"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles";
import { Title } from "./Title";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "utils";
import { FoodCard } from "./FoodCard";
import { Card } from "./Card";
import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";
import { Meals } from "models";

export const Menu = () => {
  const [dailyOffers, setDailyOffers] = useState<Array<Meals>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/getItemsByCategory", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ category: "special" }),
    })
      .then((x) => x.json())
      .then(({ data }) => {
        console.log(data);

        const type = data.categories.nodes[0].name;
        const mealsArray = data.categories.nodes[0].posts.nodes.map(
          ({
            content,
            featuredImage,
            title,
            tags,
          }: {
            content: string;
            featuredImage: {
              node: { sourceUrl: string; altText: string };
            };
            title: string;
            tags: { nodes: Array<{ name: string }> };
          }) =>
            ({
              id: tags.nodes[0].name,
              img: featuredImage.node.sourceUrl,
              name: title,
              price: parseInt(
                content
                  .replaceAll("</p>", "")
                  .replaceAll("<p>", "")
                  .replaceAll("\n", "")
              ),
              type,
            } as Meals)
        );

        console.log(mealsArray);

        setDailyOffers(mealsArray);
      })
      .finally(() => setLoading(false));
  }, []);

  console.log(dailyOffers);

  return (
    <section
      id="menu"
      className={`mb-32 ${styles.padding} flex flex-col gap-16`}
    >
      <Title level={2} className={`${styles.title} text-secondary`}>
        The satisfying & colourful dishes
      </Title>
      <motion.div
        className="px-16 w-full flex justify-center items-center md:items-stretch gap-8 md:gap-0 lg:justify-between md:flex-row flex-col"
        variants={staggerContainer()}
        whileInView="show"
        initial="hidden"
      >
        {!loading &&
          dailyOffers.map(({ id, img, name, price, type }, i) =>
            i === 0 ? (
              <>
                <div className="relative" key={id}>
                  <Title
                    level={3}
                    className="text-primary text-3xl absolute top-2 -left-8 z-10 uppercase"
                  >
                    Daily Offer
                  </Title>
                  <FoodCard name={name} price={price} src={img} />
                </div>
                <Title
                  level={3}
                  className="text-secondary text-6xl self-center"
                >
                  &
                </Title>
              </>
            ) : (
              <FoodCard name={name} price={price} src={img} key={id} />
            )
          )}
      </motion.div>

      <motion.div
        variants={fadeIn("up", 12, 60)}
        whileInView="show"
        initial="hidden"
      >
        <Title level={3} className="text-secondary text-2xl text-center">
          Choose from our wide variety
        </Title>
        <motion.ul
          variants={staggerContainer()}
          whileInView="show"
          initial="hidden"
          className="flex flex-wrap lg:flex-nowrap justify-center lg:items-stretch gap-8 lg:gap-0 px-4 md:px-16 lg:justify-between"
        >
          <motion.li variants={fadeIn("up", 12, 60)}>
            <Card className="aspect-square w-48 p-4 grid place-items-center h-48">
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
          </motion.li>
          <motion.li variants={fadeIn("up", 12, 60)}>
            <Card className="aspect-square w-48 p-4 grid place-items-center h-48">
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
          </motion.li>
          <motion.li variants={fadeIn("up", 12, 60)}>
            <Card className="aspect-square w-48 p-4 grid place-items-center h-48">
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
          </motion.li>
          <motion.li variants={fadeIn("up", 12, 60)}>
            <Card className="aspect-square w-48 p-4 grid place-items-center h-48">
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
          </motion.li>
          <motion.li variants={fadeIn("up", 12, 60)}>
            <Card className="aspect-square w-48 p-4 grid place-items-center h-48">
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
          </motion.li>
        </motion.ul>
      </motion.div>
      <Button className="overflow-hidden max-w-fit self-center">
        <Link className="w-full h-full" href="/menu">
          Show me the menu
        </Link>
      </Button>
    </section>
  );
};
