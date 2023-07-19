import { screen, render, getByText } from "@testing-library/react";
import { Card } from "../components/Card";
import "@testing-library/jest-dom";

const className: string = "bg-secondary text-white";

beforeEach(() => {
  render(
    <Card className={className}>
      <h2>I am a card</h2>
    </Card>
  );
});

describe("Card component", () => {
  it("should render the children passed down to it", () => {
    screen.debug();

    expect(
      screen.getByRole("heading", {
        name: /I am a card/i,
      })
    ).toBeInTheDocument();
  });
  it("should have the added classNames", () => {
    expect(
      screen.getByRole("heading", {
        name: /I am a card/i,
      }).parentElement
    ).toHaveClass("bg-secondary", "text-white");
  });
});
