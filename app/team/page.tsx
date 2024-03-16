import React, { ReactNode } from "react";
import { Poppins } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { Tabs, Tab, Card, CardBody, CardHeader, Textarea, Divider, Button, Link, Chip } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import "./team.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: '300'
  })
  
  const bebas_neue = Bebas_Neue({
    subsets: ["latin"],
    weight: '400'
  })

interface festSecs{
    name: ReactNode;
    designation: string; 
    imgSrc: string; 
  }
  
  interface dfs{
    name: string; 
    designation: string;
    imgSrc: string; 
    dept: ReactNode; 
  }

  const imageStyle = {
  width: '100%',
  height: "218px",
  margin: 'auto',
  borderRadius: '24px',
  }
  
  const FestSecs: React.FC<festSecs> = ({ name, designation, imgSrc }) => {
    return (
    <div className="w-full h-[220px] border border-white-600 bg-black rounded-3xl grid grid-cols-2">
        <div className="mx-auto object-contain">
        <img src={imgSrc} alt="Person" style={imageStyle} className="object-cover"></img>
        </div>
        <div className="ml-2 md:ml-3 responsive-size">
        <div className="text-[#F72585] text-[18px] md:text-2xl">
            {name}
        </div>
        <div className="text-[#FFFFFF] text-[12px] md:text-[13px]">
            {designation}
        </div>
        </div>
    </div>
    )
  }

  const DFS: React.FC<dfs> = ({ name, designation, imgSrc, dept }) => {
    return (
    <div className="w-full h-[400px] md:h-[320px] border border-white-600 bg-black rounded-3xl grid grid-rows-2">
        <div className="mx-auto w-full">
        <img src={imgSrc} alt="Person" className="object-cover h-full w-full rounded-[24px]"></img>
        </div>
        <div className="text-center mt-4">
        <div className="text-[#F72585] text-[18px] md:text-2xl">
            {name}
        </div>
        <div className="text-[#FFFFFF] text-[12px] md:text-[13px]">
            {designation}
        </div>
        <div className="text-[#E5D998] text-[11px]">
            {dept}
        </div>
        </div>
    </div>
    )
  }

export default function team(){
    return (
        <main className="min-h-screen">
          <div className="flex justify-center">
                <p className={`${bebas_neue.className} relative mt-4 text-white font-medium md:text-6xl text-6xl text-[#FFFFFF]`}>
                  MEET THE TEAM
                  </p>
          </div>
          <div className="w-full h-[220px] rounded-lg bg-red z-10 absolute">
          </div>
          <div className="grid grid-cols-2 gap-6 mt-[10px] relative px-4 md:px-28">
          <FestSecs imgSrc = "/team/Amishi_FS.jpg" name= {
            <div className="responsive-name">
                Amishi Gupta 
                </div>
          } designation="Fest Secretary"/>
          <FestSecs imgSrc = "/team/Lekha_FS.jpg" name= {
            <><div className="responsive-div-small">
                        Lekha Siva kumar
                    </div><div className="responsive-div">
                        Lekha Sivakumar
                        </div></>
          } designation="Fest Secretary"/>
          </div>
          <div className="mt-10 responsive-grid-small gap-4 relative px-4 md:px-28">
            <DFS imgSrc ="/team/Anirudh_DFS.jpg" name="Anirudh" designation="Deputy Fest Secretary" dept = "Finance, Sponsorships, and Headliners"/>
            <DFS imgSrc ="/team/Anwita_DFS.jpg" name="Anwita Gopalka" designation="Deputy Fest Secretary" dept ="PR & Outreach, Social Media and Marketing, Content and Design"/>
            <DFS imgSrc ="/team/Hubaba_DFS.jpg" name="Hubaba Masood" designation="Deputy Fest Secretary" dept = "Logistics, Decor, Legal & Documentation"/>
            <DFS imgSrc ="/team/Kritkeerat_DFS.jpg" name="Kritkeerat Kaur" designation="Deputy Fest Secretary" dept = "Competitions & Informals"/>
            <DFS imgSrc ="/team/Sania_DFS.jpg" name="Sania Bhargava" designation="Deputy Fest Secretary" dept = "Safety and Security, Travel & Hospitality and Admin"/>
            <DFS imgSrc ="/team/Vansh_DFS.jpg" name="Vansh Bothra" designation="Deputy Fest Secretary" dept = "IT & Design"/>
          </div>
        </main>
      )
}