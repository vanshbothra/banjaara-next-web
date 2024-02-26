import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Background from "@/components/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Banjaara 2024",
  description: "Official website for Banjaara 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
