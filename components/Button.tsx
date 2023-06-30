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
        "rounded-full p-4 bg-transparent border-4 border-primary text-center text-primary font-bold uppercase text-sm" +
        className
      }
    >
      {children}
    </button>
  );
};
