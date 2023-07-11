"use client";

import { Footer, Navbar } from "@/components";
import React from "react";
import "../styles/global.css";
import CartProvider from "context/CartProvider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <title>A Culinary Journey to the Heart of Japan - Betsushi</title>
        <link rel="icon" href="/favicon.svg"></link>
      </head>
      <CartProvider>
        <body className="overflow-x-hidden">
          <Navbar />
          {children}
          <Footer />
        </body>
      </CartProvider>
    </html>
  );
};

export default RootLayout;
