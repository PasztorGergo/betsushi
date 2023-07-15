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
        <title>Betsushi - A Culinary Journey to the Heart of Japan</title>
        <link rel="icon" href="/favicon.svg"></link>
        <meta
          property="description"
          content="Nestled in the heart of Nagoya, our restaurant invites you on a gastronomic journey inspired by the rich traditions and artistry of Japan."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://betsushi.vercel.app" />
        <meta
          property="og:title"
          content="Betsushi - A Culinary Journey to the Heart of Japan"
        />
        <meta
          property="og:description"
          content="Nestled in the heart of Nagoya, our restaurant invites you on a gastronomic journey inspired by the rich traditions and artistry of Japan."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://betsushi.vercel.app" />
        <meta
          property="twitter:title"
          content="Betsushi - A Culinary Journey to the Heart of Japan"
        />
        <meta
          property="twitter:description"
          content="Nestled in the heart of Nagoya, our restaurant invites you on a gastronomic journey inspired by the rich traditions and artistry of Japan."
        />
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
