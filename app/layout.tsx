"use client";

import { Footer, Navbar } from "@/components";
import React from "react";
import "../styles/global.css";
import CartProvider from "context/CartProvider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
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
