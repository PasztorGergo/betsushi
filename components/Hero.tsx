"use client";

import React from "react";
import { Scroller } from "./Scroller";
import { Title } from "./Title";
import styles from "../styles";

export const Hero = () => {
  return (
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
  );
};
