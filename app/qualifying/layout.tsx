import React from "react";

export const metadata = {
  title: "Qualifying",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="p-2 lg:p-4 grid grid-cols-1 gap-4">{children}</main>;
}
