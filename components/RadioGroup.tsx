import React from "react";

export const RadioGroup = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`${className}`}>{children}</div>;
};
