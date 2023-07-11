"use client";

import { FoodCard, MenuHeader, SkeletonCard, Title } from "@/components";
import styles from "@/styles/index";
import { useCart } from "context/CartProvider";
import { Meals } from "models";
import React, { useEffect, useState } from "react";

const MenuPage = () => {
  const { category } = useCart()!;
  const [meals, setMeals] = useState<Array<Meals>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/getItemsByCategory", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ category }),
    })
      .then((x) => x.json())
      .then(({ data }) => {
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

        setMeals(mealsArray);
      })
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <>
      <MenuHeader />
      <main
        className={`${styles.padding} flex flex-wrap items-center justify-start gap-8 content-center mt-12`}
      >
        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : meals.filter((x) => x.type === category).length > 0 ? (
          meals.map(
            ({ id, img, type, ...props }) =>
              type === category && <FoodCard {...props} src={img} key={id} />
          )
        ) : (
          <Title
            level={3}
            className={`${styles.title} text-secondary text-opacity-75 w-full`}
          >
            No items were found
            <br></br>
            (╯︵╰,)
          </Title>
        )}
      </main>
    </>
  );
};

export default MenuPage;
