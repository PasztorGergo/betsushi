import React, { DOMAttributes } from "react";
import { RadioInput } from "./RadioInput";

export const RadioGroup = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <form className={`${className}`}>{children}</form>;
};
