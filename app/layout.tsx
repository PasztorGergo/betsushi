"use client";

import { Footer, Navbar } from "@/components";
import React, { Suspense } from "react";
import "../styles/global.css";
import CartProvider from "context/CartProvider";
import Loader from "./loading";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <title>A Culinary Journey to the Heart of Japan - Betsushi</title>
        <link rel="icon" href="/favicon.svg"></link>
      </head>
      <CartProvider>
        <body className="overflow-x-hidden">
          <Toaster
            toastOptions={{
              className: "",
              style: {
                background: "#F8EBD3",
                color: "#186259",
                borderRadius: "0.5rem",
                padding: "0.5rem",
                fontWeight: "bold",
              },
            }}
          />
          <Navbar />
          <AnimatePresence>
            <Suspense fallback={<Loader />}>{children}</Suspense>
          </AnimatePresence>
          <Footer />
        </body>
      </CartProvider>
    </html>
  );
};

export default RootLayout;
