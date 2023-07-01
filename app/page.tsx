import React from "react";
import { Hero, About, Menu } from "@/components";

const HomePage = () => {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Menu />
      </main>
    </>
  );
};

export default HomePage;
