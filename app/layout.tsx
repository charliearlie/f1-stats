import React from "react";
import { Header } from "./components/header";
import "../styles/globals.css";

export const metadata = {
  title: "F1 Stats",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Header />
        <div className="xl:max-w-screen-xl mx-auto sm:px-4 xl:px-0">
          {children}
        </div>
      </body>
    </html>
  );
}