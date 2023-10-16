"use client"
import React, { useEffect } from "react";
import "./globals.css";

import Header from "@/Components/header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Header />
        {children}
      </body>
    </html>
  );
}
