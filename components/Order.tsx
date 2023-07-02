"use client";

import React from "react";
import { Title } from "./Title";
import styles from "../styles";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "utils";
import Link from "next/link";

export const Order = () => {
  return (
    <section
      className={`${styles.padding} mt-64 flex flex-col items-center justify-center gap-8`}
    >
      <Title level={2} className={`${styles.title} text-secondary`}>
        Got hungry? Order now!
      </Title>
      <p className="font-bold uppercase text-primary text-center text-xl">
        Our delivery service is limited to Nagoya
      </p>
      <motion.div
        variants={fadeIn("up", 12, 60)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        <Button>
          <Link href="/menu">Order now</Link>
        </Button>
      </motion.div>
    </section>
  );
};
