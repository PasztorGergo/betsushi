"use client";

import { Title } from "components/Title";
import { motion } from "framer-motion";
import React from "react";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full z-50 h-full fixed grid-cols-1 grid-rows-[1fr_6rem] top-0 left-0 bg-background grid place-items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="300"
        height="300"
        viewBox="-50 -50 100 100"
      >
        <use xlinkHref="#o" transform="rotate(11.25)" />
        <g id="qb">
          <use
            id="pb"
            xlinkHref="#p2"
            transform="rotate(11.25) translate(1.5)"
          />
          <use xlinkHref="#pb" transform="rotate(22.5)" />
          <use xlinkHref="#pb" transform="rotate(45)" />
          <use xlinkHref="#pb" transform="rotate(67.5)" />
        </g>
        <use xlinkHref="#qb" transform="rotate(90)" />
        <use xlinkHref="#qb" transform="rotate(180)" />
        <use xlinkHref="#qb" transform="rotate(270)" />
        <g id="o">
          <g id="q1">
            <motion.path
              id="p1"
              d="M 0,0 L 40,-8 C 53,-6 53,6 40,8 z"
              fill="#e7cd54"
              stroke="#806600"
              stroke-width=".6"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  repeatDelay: 0.5,
                  staggerChildren: 0.3,
                },
              }}
            />
            <use xlinkHref="#p1" transform="rotate(22.5)" />
            <use xlinkHref="#p1" transform="rotate(45)" />
            <use xlinkHref="#p1" transform="rotate(67.5)" />
          </g>
          <use xlinkHref="#q1" transform="rotate(90)" />
          <use xlinkHref="#q1" transform="rotate(180)" />
          <use xlinkHref="#q1" transform="rotate(270)" />
        </g>
        <g id="q2">
          <path
            id="p2"
            d="M 7,0 L 39,-5.5 C 49.5,-4 49.5,4 39,5.5 z"
            fill="#ffefa7"
          />
          <use xlinkHref="#p2" transform="rotate(22.5)" />
          <use xlinkHref="#p2" transform="rotate(45)" />
          <use xlinkHref="#p2" transform="rotate(67.5)" />
        </g>
        <use xlinkHref="#q2" transform="rotate(90)" />
        <use xlinkHref="#q2" transform="rotate(180)" />
        <use xlinkHref="#q2" transform="rotate(270)" />
        <circle r="6" fill="#fee46e" />
        <path
          d="M -4.104,3.815 l 1.038,1.415 1.998,.702 1.729,.016 1.643,-.343 1.893,-1.261 1.115,-1.112 .572,-2.542 -.874,-3.634 c .377,4.983 -4.608,9.358 -9.112,6.758 z"
          fill="#f3c702"
        />
        <path
          d="M 1.846,-2.209 c 0,1.737 -2.122,3.013 -3.916,3.013 c -1.794,0 -3.115,-1.909 -3.115,-3.645 c 0,-.892 .449,-.898 1.065,-1.471 c .584,-.542 1.585,-1.543 2.458,-1.543 c 1.794,0 3.508,1.909 3.508,3.645 z"
          fill="#ffefa7"
        />
        <circle r="6" fill="none" stroke="#806600" stroke-width=".6" />
      </svg>
      <Title className="text-secondary text-4xl text-center" level={2}>
        Loading ...
      </Title>
    </motion.div>
  );
};

export default Loader;
