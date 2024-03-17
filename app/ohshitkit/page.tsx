import React from "react";
import { Poppins } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { Tabs, Tab, Card, CardBody, CardHeader, Textarea, Divider, Button, Link, Chip } from "@nextui-org/react";
import Image from "next/image";
import Background from "../../public/teambg.png";

const poppins = Poppins({
    subsets: ["latin"],
    weight: '300'
  })
  
  const bebas_neue = Bebas_Neue({
    subsets: ["latin"],
    weight: '400'
  })

export default function team(){
      return(
        <main className={`flex w-full overflow-hidden`}>
        <div className="-z-10 bottom-0 absolute w-full h-full overflow-hidden">
        <span className="block w-full h-full relative overflow-hidden">
          <Image
            src={Background}
            priority
            placeholder="blur"
            fill={true}
            quality={100}
            alt = "Oh Shit Kit"
            className="object-cover object-bottom w-full h-full"
          />
        </span>
      </div>
            <div>
                <p>
                    MEET THE TEAM
                </p>
            </div>
        </main>

      )
}