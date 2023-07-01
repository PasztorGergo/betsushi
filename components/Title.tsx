"use client";

import React from "react";
import localFont from "@next/font/local";

const jansina = localFont({
  src: "../JANSINA.ttf",
  variable: "--font-jansina",
});

export const Title = ({
  level,
  children,
  className,
}: {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}) => {
  return React.createElement(`h${level}`, {
    children,
    className: `${className} ${jansina.className}`,
  });
};
