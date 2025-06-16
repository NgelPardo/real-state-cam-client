import type { Metadata } from "next";

import "./globals.css";
import { geistMono, geistSans } from "../config/fonts";



export const metadata: Metadata = {
  title: "Real Estate App",
  description: "Una tienda virtual de propiedades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
