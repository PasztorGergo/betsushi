import { Title } from "components/Title";
import React from "react";
import styles from "../styles";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="w-full md:mt-32 mt-16 bg-background flex flex-col items-center gap-8 justify-center">
      <ruby className={`${styles.title} text-primary text-2xl`}>
        見つからなかった! <rp>(</rp>
        <rt>mitsukaranakatta</rt>
        <rp>)</rp>
      </ruby>
      <h3 className={`${styles.title} text-secondary text-lg`}>
        The page couldn't be found
      </h3>
      <Link
        href="/"
        className="text-secondary hover:text-opacity-100 transition-colors text-opacity-75 text-center font-bold"
      >
        &larr;Back to the home page
      </Link>
    </main>
  );
};

export default NotFound;
