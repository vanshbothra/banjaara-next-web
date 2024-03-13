'use client'

import type { Metadata } from "next";
import "./globals.css";
import NavbarComponent from '@/components/navbar'
import Image from "next/image";
import Providers from "./provider";
import { Poppins} from "next/font/google";
import { Meteors } from "@/components/meteors";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: '300'
})

// export const metadata: Metadata = {
//   title: "Banjaara 2024",
//   description: "Official website for Banjaara 2024",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-x-hidden`}>
        <Providers>
          <div className="z-[0] fixed w-full h-full brightness-50 bg-auto m-0">
            <Image src='/galaxy-bg.png' alt="Galaxy" fill={true} className="blur-lg object-cover sm:object-fill overflow-hidden" />
          </div>
          {pathname === '/' && (
            <div className="w-full relative">
              <div className="absolute w-screen z-10 bg-transparent py-40 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <Meteors number={80} />
              </div>
            </div>
          )}
          <NavbarComponent/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
