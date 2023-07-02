import React from "react";
import { Hero, About, Menu, Location, Order } from "@/components";

const HomePage = () => {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Menu />
        <Location />
        <Order />
      </main>
    </>
  );
};

export default HomePage;
