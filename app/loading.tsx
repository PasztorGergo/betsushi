"use client";

import { motion } from "framer-motion";
import React from "react";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full fixed top-0 left-0 bg-"
    ></motion.div>
  );
};

export default Loader;
