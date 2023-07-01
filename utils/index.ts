import { Variants } from "framer-motion";

const staggerContainer: (delay?: number) => Variants = (
  delay: number = 0.3
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: delay,
      },
    },
  };
};

const fadeIn: (
  direction: "up" | "down" | "left" | "right",
  damping: number,
  stiffness: number
) => Variants = (
  direction: "up" | "down" | "left" | "right",
  damping: number = 8,
  stiffness: number = 60
) => {
  return {
    hidden: {
      x: direction === "left" ? "-3rem" : direction === "right" ? "3rem" : 0,
      y: direction === "up" ? "3rem" : direction === "down" ? "-3rem" : 0,
      opacity: 0,
    },
    show: {
      x: "0rem",
      y: "0rem",
      opacity: 1,
      transition: {
        damping,
        type: "spring",
        stiffness,
      },
    },
  };
};

export { fadeIn, staggerContainer };
