"use client";
import React from "react";

export const Button = ({
  children,
  className,
  type,
  id,
  role,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
  id?: string;
  role?: string;
}) => {
  return (
    <button
      role={role}
      id={id}
      className={
        "rounded-full p-2 bg-transparent border-2 hover:bg-primary hover:text-background transition-colors border-primary text-center text-primary font-bold uppercase text-sm" +
        className
      }
      type={type}
    >
      {children}
    </button>
  );
};
