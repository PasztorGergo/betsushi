import React from "react";
import { Title } from "./Title";
import styles from "../styles";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer
      className={`grid text-center gap-8 md:gap-0 md:text-left place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 pb-4 md:grid-rows-4 bg-secondary mt-64 pt-16 [clip-path:polygon(0_0,_100%_3rem,_100%_100%,_0%_100%)] ${styles.padding}`}
    >
      <Title
        level={2}
        className="text-white col-start-1 row-start-1 text-[clamp(32px,11vw,3rem)] text-left"
      >
        Betsushi
      </Title>
      <p className="text-white uppercase col-start-1 row-start-2">
        <span className="font-bold">Email</span> - info@betsushi.jp
      </p>
      <p className="text-white uppercase col-start-1 row-start-3">
        <span className="font-bold">Phone</span> - +81 52 XXX XXXX
      </p>
      <p className="text-white uppercase col-start-1 row-start-4">
        <span className="font-bold">Location</span> - X-chōme-X
        Noritakeshinmachi, Nishi Ward, Nagoya, Aichi 451-0051, Japan
      </p>
      <Image
        src="/Footer.svg"
        alt="Betsushi logo"
        width={243}
        height={243}
        className="md:row-start-1 md:row-span-full col-start-1 md:col-start-2 place-self-center"
      />
    </footer>
  );
};
