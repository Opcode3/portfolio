import type { Metadata } from "next";
import "../globals.css";

import { Manrope, Syne } from "../fonts";
import Footer from "../components/footer";
import Header from "../components/header";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Opcode ~ Emeka's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Syne.className}>
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}