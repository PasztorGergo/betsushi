import React from "react";
import { Hero, About, Menu, Location } from "@/components";

const HomePage = () => {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Menu />
        <Location />
      </main>
    </>
  );
};

export default HomePage;
