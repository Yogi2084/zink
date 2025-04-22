"use client";

import React, { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import TanstackProvider from "../components/tanstack-provider/TanstackProvider";
const inter = Inter({ subsets: ["latin"] });
const RootLayout = ( props: PropsWithChildren ) => {
  return (
      <html lang="en" className={inter.className}>
        <body>
          <TanstackProvider>
          {props.children}
          </TanstackProvider>
        </body>
      </html>
  );
}
export default RootLayout;