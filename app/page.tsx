import { Scroller } from "components/Scroller";
import { Title } from "components/Title";
import React from "react";

const HomePage = () => {
  return (
    <>
      <header className="h-[75vh] pt-16 w-full flex flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-4">
          <Title
            className="text-center text-primary text-4xl font-bold"
            level={1}
          >
            Indulge in the Artistry of Authentic Japanese Sushi
          </Title>
          <Title
            className="text-center text-secondary text-xl font-bold"
            level={3}
          >
            A Culinary Journey to the Heart of Japan
          </Title>
        </div>
        <Scroller></Scroller>
      </header>
      <main>hi</main>
    </>
  );
};

export default HomePage;
