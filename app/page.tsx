import React from "react";
import { Hero, About, Menu, Location, Order, Testimonials } from "@/components";

const HomePage = () => {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Menu />
        <Location />
        <Order />
        <Testimonials />
      </main>
    </>
  );
};

export default HomePage;
