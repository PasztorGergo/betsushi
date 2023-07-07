"use client";

import React from "react";

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`rounded-lg bg-background [box-shadow:inset_0px_-6px_2px_0_rgba(0,0,0,0.25)] ${className}`}
    >
      {children}
    </div>
  );
};
