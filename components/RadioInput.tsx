import React from "react";

export const RadioInput = ({
  name,
  id,
  children,
  value,
  onChange,
}: {
  name: string;
  id: string;
  children: React.ReactNode;
  value: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        type="radio"
        className="hidden"
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </>
  );
};
