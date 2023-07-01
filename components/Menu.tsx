"use client";
import React from "react";
import styles from "../styles";
import { Title } from "./Title";

export const Menu = () => {
  return (
    <section className="mb-64">
      <Title level={2} className={`${styles.title} text-secondary`}>
        The satisfying & colourful dishes
      </Title>
    </section>
  );
};
