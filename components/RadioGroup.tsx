import React from "react";
import { RadioInput } from "./RadioInput";

export const RadioGroup = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`${className}`}>{children}</div>;
};
