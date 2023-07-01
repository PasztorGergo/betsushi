import { Footer, Navbar } from "@/components";
import React from "react";
import "../styles/global.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className="overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
