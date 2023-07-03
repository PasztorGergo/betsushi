import { Title } from "components/Title";
import React from "react";
import { RadioGroup, RadioInput } from "@/components";

export const page = () => {
  return (
    <main>
      <section>
        <Title level={2}>Your Cart</Title>
      </section>
      <form>
        <div className="flex justify-start">
          <input type="text" />
          {/*
            after typing the first 3 chars put a dash
        */}
          <span>Aichi, Nagoya,</span>
          <input type="text" />
          <span>,</span>
          <input type="text" />
        </div>
        <RadioGroup>
          <RadioInput name="d" id="s">
            d
          </RadioInput>
        </RadioGroup>
      </form>
    </main>
  );
};
