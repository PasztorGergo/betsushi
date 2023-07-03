import React from "react";

export const RadioInput = ({
  name,
  id,
  children,
}: {
  name: string;
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input className="hidden" id={id} name={name} />
    </>
  );
};
