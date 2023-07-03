"use client";

import React from "react";
import { RiAncientPavilionLine } from "react-icons/ri";
import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";
import styles from "../styles";

export const Navbar = () => {
  return (
    <nav
      className={
        styles.padding +
        " mt-4 w-full hidden md:flex justify-between items-center"
      }
    >
      <Link href="/">
        <Image
          alt="betsushi logo"
          src="/favicon.svg"
          width={113}
          height={113}
        />
      </Link>
      <ul className="bg-background flex justify-between items-center w-full h-full text-sm uppercase font-bold text-secondary md:w-1/3 rounded-lg [box-shadow:inset_0_-6px_2px_0_rgba(0,0,0,0.25)] p-4">
        <li className="cursor-pointer hover:brightness-150 transition">
          <Link href="/">
            <RiAncientPavilionLine className="text-[32px]" />
          </Link>
        </li>
        <li className="cursor-pointer hover:brightness-150 transition">
          <Link href="#about">about</Link>
        </li>
        <li className="cursor-pointer hover:brightness-150 transition">
          <Link href="#menu">menu</Link>
        </li>
        <li className="cursor-pointer hover:brightness-150 transition">
          <Link href="#location">location</Link>
        </li>
      </ul>
      <Button className="overflow-hidden">
        <Link className="w-full h-full" href="/menu">
          Order now
        </Link>
      </Button>
    </nav>
  );
};
