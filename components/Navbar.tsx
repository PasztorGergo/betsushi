"use client";

import React from "react";
import { RiAncientPavilionLine } from "react-icons/ri";
import Image from "next/image";
import { Button } from ".";

export const Navbar = () => {
  return (
    <nav className="mt-4 w-full flex justify-between items-center">
      <Image alt="betsushi logo" src="/favicon.svg" width={113} height={113} />
      <ul className="bg-background flex justify-between items-center w-full h-full text-sm uppercase font-bold text-secondary lg:w-1/3 rounded-lg [box-shadow:inset_0_-6px_2px_0_rgba(0,0,0,0.25)] p-4">
        <li className="cursor-pointer">
          <RiAncientPavilionLine className="text-[32px]" />
        </li>
        <li className="cursor-pointer">about</li>
        <li className="cursor-pointer">menu</li>
        <li className="cursor-pointer">location</li>
      </ul>
      <Button>Order now</Button>
    </nav>
  );
};
