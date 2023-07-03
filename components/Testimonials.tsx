import React from "react";
import styles from "../styles";
import { Title } from "./Title";
import { RatingCard } from "./RatingCard";

export const Testimonials = () => {
  return (
    <section
      className={`${styles.padding} flex flex-col items-center mt-32 md:mt-64 justify-center gap-8`}
    >
      <Title level={2} className={`${styles.title} text-secondary`}>
        To prove our quality
      </Title>
      <div className="flex flex-wrap gap-8 w-full">
        {Array(6)
          .fill(0)
          .map((x, i) => (
            <RatingCard key={i} />
          ))}
      </div>
    </section>
  );
};
