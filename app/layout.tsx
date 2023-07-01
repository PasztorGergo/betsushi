import { Footer, Navbar } from "@/components";
import React from "react";
import "../styles/global.css";
import localFont from "@next/font/local";

const jansina = localFont({
  src: "./JANSINA.ttf",
  variable: "--font-jansina",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={"px-16 " + jansina.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
