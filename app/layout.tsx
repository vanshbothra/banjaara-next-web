import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Providers from "./provider";

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
      <body className={`${inter.className}`}>
        <Providers>
          <div className="z-1 fixed w-full h-full brightness-50 bg-auto m-0">
            <Image src='/galaxy-bg.png' alt="Galaxy" fill={true} className="blur-lg overflow-hidden" />
          </div>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
