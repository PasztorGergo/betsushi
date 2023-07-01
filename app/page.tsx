"use client";
import { Scroller } from "components/Scroller";
import { Title } from "components/Title";
import { motion } from "framer-motion";
import React from "react";

const HomePage = () => {
  return (
    <>
      <header className="h-[75vh] pt-16 w-full flex flex-col items-center justify-between mb-64">
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
      <main className="relative">
        <motion.section className="absolute top-0 left-0 w-full">
          <Title level={2}>About us</Title>
          <motion.div></motion.div>
          <motion.div></motion.div>
        </motion.section>
      </main>
    </>
  );
};

export default HomePage;
