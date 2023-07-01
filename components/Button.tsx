"use client";
import React from "react";

export const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={
        "rounded-full p-2 bg-transparent border-2 hover:bg-primary hover:text-background transition-colors border-primary text-center text-primary font-bold uppercase text-sm" +
        className
      }
    >
      {children}
    </button>
  );
};
