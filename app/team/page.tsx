import React, { ReactNode } from "react";
import { Montserrat, Poppins } from "next/font/google";
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

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "800",
})

interface festSecs{
    name: string;
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
  height: "268px",
  margin: 'auto',
  borderRadius: '24px',
  }
  
  const FestSecs: React.FC<festSecs> = ({ name, designation, imgSrc }) => {
    return (
    <div className="w-full h-[270px] border border-white-600 bg-black rounded-3xl grid grid-cols-2">
        <div className="mx-auto w-full">
          <img src={imgSrc} alt="Person" style={imageStyle} className="object-cover"></img>
        </div>
        <div className="md:ml-3 responsive-size">
        <div className="text-[#F72585] font-bold text-[18px] max-md:text-center md:text-[33px]">
            Amishi <br className="max-md:hidden" /> Gupta
        </div>
        <div className="text-[#FFFFFF] max-md:text-center text-[12px] md:text-[17px]">
            {designation}
        </div>
        </div>
    </div>
    )
  }

  const FestSecs2: React.FC<festSecs> = ({ name, designation, imgSrc }) => {
    return (
    <div className="mb-[5vh] w-full h-[270px] border border-white-600 bg-black rounded-3xl grid grid-cols-2">
        <div className="md:ml-3 responsive-size">
        <div className="text-[#F72585] font-bold text-[18px] max-md:text-center md:text-[33px]">
            Lekha <br className="max-md:hidden" /> Sivakumar
        </div>
        <div className="text-[#FFFFFF] max-md:text-center text-[12px] md:text-[17px]">
            {designation}
        </div>
        </div>
        <div className="mx-auto w-full">
        <img src={imgSrc} alt="Person" style={imageStyle} className="object-cover"></img>
        </div>
    </div>
    )
  }

  const DFS: React.FC<dfs> = ({ name, designation, imgSrc, dept }) => {
    return (
    <div className="w-full h-[350px] md:h-[320px] border border-white-600 bg-black rounded-3xl grid grid-rows-3">
        <div className="mx-auto w-full row-span-2">
        <img src={imgSrc} alt="Person" className="object-cover h-full w-full rounded-[24px]"></img>
        </div>
        <div className="text-center mt-4 row-start-3">
        <div className="text-[#F72585] text-[18px] md:text-2xl">
            {name}
        </div>
        <div className="text-[#FFFFFF] mt-[2px] md:mt-0 text-[12px] md:text-[13px]">
            {designation}
        </div>
        <div className="text-[#E5D998] mt-[1px] md:mt-0 text-[11px]">
            {dept}
        </div>
        </div>
    </div>
    )
  }

export default function team(){
    return (
        <main>
          <div className="flex justify-center">
                <p className={`${montserrat.className} text-center relative mt-[7vh] mb-[2vh] md:mb-[5vh] font-medium md:text-6xl text-6xl text-[#FFFFFF]`}>
                  MEET THE TEAM
                  </p>
          </div>
          <div className="grid md:grid-cols-2 gap-3 md:gap-6 mt-[10px] relative px-4 responsive-grid-fs">
          <FestSecs imgSrc = "/team/Amishi_FS.jpg" name= "Amishi Gupta" designation="Fest Secretary"/>
          <FestSecs2 imgSrc = "/team/Lekha_FS.JPG" name="Lekha Sivakumar" designation="Fest Secretary"/>
          </div>
          <div className="mt-4 md:mt-6 mb-[4vh] md:mb-[28px] responsive-grid-small relative px-4">
            <DFS imgSrc ="/team/Anirudh_DFS.jpg" name="Anirudha Ahluwalia" designation="Deputy Fest Secretary" dept = "Finance, Sponsorships, and Headliners"/>
            <DFS imgSrc ="/team/Anwita_DFS.jpg" name="Anwita Gopalka" designation="Deputy Fest Secretary" dept ="PR & Outreach, Social Media and Marketing, Content and Design"/>
            <DFS imgSrc ="/team/Hubaba_DFS.jpg" name="Hubaba Masood" designation="Deputy Fest Secretary" dept = "Logistics, Decor, Legal & Documentation"/>
            <DFS imgSrc ="/team/Kritkeerat_DFS.jpg" name="Kritkeerat Kaur" designation="Deputy Fest Secretary" dept = "Competitions & Informals"/>
            <DFS imgSrc ="/team/Sania_DFS.jpg" name="Sania Bhargava" designation="Deputy Fest Secretary" dept = "Safety and Security, Travel & Hospitality and Admin"/>
            <DFS imgSrc ="/team/Vansh_DFS.jpg" name="Vansh Bothra" designation="Deputy Fest Secretary" dept = "IT & Design"/>
          </div>
        </main>
      )
}