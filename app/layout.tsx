import type { Metadata } from "next";
import "./globals.css";
import NavbarComponent from '@/components/navbar'
import Image from "next/image";
import Providers from "./provider";
import { Poppins} from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: '300'
})

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
      <body className={`${poppins.className}`}>
        <Providers>
          <div className="z-1 fixed w-full h-full brightness-50 bg-auto m-0">
            <Image src='/galaxy-bg.png' alt="Galaxy" fill={true} className="blur-lg overflow-hidden" />
          </div>
          <NavbarComponent/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
