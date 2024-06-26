"use client";
import React from "react";
import { Montserrat, Poppins } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { Tabs, Tab } from "@nextui-org/react";

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
  
export default function eventsschedule(){
    return (
        <main>
          <div className="flex justify-center">
                <p className={`${montserrat.className} text-center relative mt-[7vh] mb-[5vh] font-medium md:text-6xl text-5xl text-[#FFFFFF]`}>
                  EVENTS SCHEDULE
                  </p>
            </div>
            <Tabs aria-label="Events-Schedule" className={`${bebas_neue.className} flex justify-center`}>
              <Tab key="day-1" title="Day 1" className="text-3xl p-5 px-2 mr-4 md:mr-2">
            <div className="ml-[5vh] md:ml-[10vh]">
            <p className={`${montserrat.className} relative font-medium text-2xl text-[#FFFFFF]`}>
                6th April
                </p>
            </div>
    <div className="flex items-center justify-center mt-8 mb-8 px-8">
    <div className="border-t border-white grid grid-cols-4 grid-rows-16 gap-y-4 relative w-full">
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl`}>
      10:00-15:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl`}>
      Reddy&apos;s Auditorium
    </p>
  </div>
  <div className="mt-4 border-b border-white flex items-center col-span-2">
    <a href="https://unstop.com/events/footloose-banjaara-2024-ashoka-university-sonepat-haryana-923697" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      FOOTLOOSE - WESTERN DANCE
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      11:00-18:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      Multi Purpose Hall
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <a href="https://unstop.com/competitions/mukhauta-banjaara-2024-ashoka-university-sonepat-haryana-924394" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      MUKHAUTA - STAGE PLAY
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      10:00-14:00
    </p>
  </div>
    <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      CFE
    </p>
  </div>
  <div className=" border-b border-white flex items-center col-span-2">
    <a href="https://unstop.com/competitions/marketing-101-banjaara-2024-ashoka-university-sonepat-haryana-923805" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      MARKETING 101
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      12:00-18:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      AC02-206 & 207
    </p>
  </div>
  <div className=" border-b border-white flex items-center col-span-2">
    <a href="https://unstop.com/events/samadhan-banjaara-2024-ashoka-university-sonepat-haryana-923812" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      SAMADHAN - CASE COMPETITION
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      14:00-17:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      Open Amphi Theatre
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <a href="https://unstop.com/events/battle-of-the-bands-banjaara-2024-ashoka-university-sonepat-haryana-924299" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      BATTLE OF THE BANDS
    </a>
  </div><div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      17:00-19:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
    HAND STATUE LAWNS
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <a href="https://nude-banjara.vercel.app/" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      STREETSTYLE FACE OFF
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      10:00-17:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      AC02-004
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <a href="https://unstop.com/events/aaina-banjaara-2024-ashoka-university-sonepat-haryana-923793" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      AAINA - PORTRAIT PHOTOGRAPHY
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      11:00-14:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      AC02-013
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <a href="https://unstop.com/events/symphony-of-suspicion-banjaara-2024-ashoka-university-sonepat-haryana-923802" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      SYMPHONY OF SUSPICION
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      10:00-17:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      AC02-001, 002, 005, 011, 012, 101, 102, 104, 108, 112, 113, 114
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSddRh6PRsXPJqo9FkXvAXi02zbIakaAeBipLAeMj3eb8wnlfQ/viewform" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      ASHOKA PARLIAMENTARY DEBATE
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      10:00-17:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
     ONLINE
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <a href="https://unstop.com/competitions/starstruck-banjaara-2024-ashoka-university-sonepat-haryana-923811"className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      STARSTRUCK - GRAPHIC DESIGN
    </a>
  </div> 
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      10:00-17:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
     AC02-008 & 009
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <p className={`${bebas_neue.className} relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      EXHIBITION
    </p>
  </div><div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      11:00-17:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
     AC02-003
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <p className={`${bebas_neue.className} relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      GAME ROOM
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      14:00-17:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
     AC02 1st floor balcony
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <p className={`${bebas_neue.className} relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      ASTROMELA
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      10:00-17:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
     AC02-103
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <p className={`${bebas_neue.className} relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      INFORMAL MIXER
    </p>
  </div><div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      11:00-17:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
     ATRIUM
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <p className={`${bebas_neue.className} relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      JUST DANCE
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      11:00-13:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
     AC02-014
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <p className={`${bebas_neue.className} relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      UNWIND SESSION
    </p>
  </div>  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      11:00-14:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
     AC02-007
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <p className={`${bebas_neue.className} relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      MUBI Movie Screening
    </p>
  </div><div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      14:00-15:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
     AC02-013
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <p className={`${bebas_neue.className} relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      IMPROV WORKSHOP
    </p>
  </div>
</div>
</div>
<div className="ml-[2vh] md:ml-[10vh]">
            <p className={`${montserrat.className} -mt-6 p-4 text-medium relative font-medium md:text-xl text-[#FFFFFF] mb-4`}>
                Note: Events with no registration links attached to them don&apos;t require a registration. 
                </p>
              </div>
</Tab> <Tab key="day-2" title="Day 2" className="text-3xl p-5 px-2">


            <div className="ml-[5vh] md:ml-[10vh]">
            <p className={`${montserrat.className} relative font-medium text-2xl text-[#FFFFFF]`}>
                7th April
                </p>
              </div>
<div className="flex items-center justify-center mt-8 mb-8 px-8">
    <div className="border-t border-white grid grid-cols-4 grid-rows-16 gap-y-4 relative w-full">
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl`}>
      14:00-16:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl`}>
      AC02-011
    </p>
  </div>
  <div className="mt-4 border-b border-white flex items-center col-span-2">
    <a href="https://forms.gle/bAXZLnRsRPN3Vkkw7" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      SPACE TURTLE
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      13:00-16:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      Reddy&apos;s Auditorium
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <a href="https://unstop.com/events/concordia-banjaara-2024-ashoka-university-sonepat-haryana-924339" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      CONCORDIA - ACAPELLA
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      12:00-18:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      Multi purpose Hall
    </p>
  </div>
  <div className=" border-b border-white flex items-center col-span-2">
    <a href="https://unstop.com/competitions/trashionista-banjaara-2024-ashoka-university-sonepat-haryana-923818" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      TRASHIONISTA - SUSTAINABLE COUTURE
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      11:00-17:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      Hand Statue Lawns
    </p>
  </div>
  <div className=" border-b border-white flex items-center col-span-2">
    <a href="https://unstop.com/competitions/nautanki-banjaara-2024-ashoka-university-sonepat-haryana-924385" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      NAUTANKI - NUKKAD NATAK
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      17:00-18:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      Hand Statue Lawns
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <a href="https://unstop.com/competitions/food-fiesta-banjaara-2024-ashoka-university-sonepat-haryana-923791" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      FOOD FIESTA - EATING COMPETITION
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      12:00-16:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      CFE
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <a href="https://unstop.com/competitions/barrier-barrage-banjaara-2024-ashoka-university-sonepat-haryana-924402" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      BARRIER BARRAGE - CRISIS COMPETITION
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      15:00-18:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      AC02-210
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <a href="https://unstop.com/competitions/rahageer-banjaara-2024-ashoka-university-sonepat-haryana-923800" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      RAHAGEER - SLAM POETRY
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      12:00-18:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      AC02-108
    </p>
  </div>
  <div className=" border-b border-white flex items-center col-span-2">
    <a href="https://unstop.com/events/fifa-banjaara-2024-ashoka-university-sonepat-haryana-923806" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      FIFA
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      13:00-16:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      AC02-206 & 207
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <a href="https://unstop.com/quiz/in-quiz-itive-banjaara-2024-ashoka-university-sonepat-haryana-923804" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      IN-QUIZ-ITIVE - QUIZ COMPETITION
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      10:00-17:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
    AC02-001, 002, 004, 005, 013 
    </p>
  </div>
  <div className=" border-b border-white flex items-center col-span-2">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSddRh6PRsXPJqo9FkXvAXi02zbIakaAeBipLAeMj3eb8wnlfQ/viewform" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      ASHOKA PARLIAMENTARY DEBATE
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      11:00-17:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
     AC02-008 & 009
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <p className={`${bebas_neue.className} relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      EXHIBITION
    </p>
  </div>   <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      15:00-18:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
     AC02-107
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <p className={`${bebas_neue.className} relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      KASUAL KARAOKE
    </p>
  </div><div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      14:00-18:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
     AC02-003
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <p className={`${bebas_neue.className} relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      HER CAMPUS MURDER MYSTERY
    </p>
  </div>  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      11:00-18:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
     AC02-103
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <p className={`${bebas_neue.className} relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      INFORMALS MIXER
    </p>
  </div>   <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      16:00-18:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
     AC02-014
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <p className={`${bebas_neue.className} relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      BUILD YOUR MOVIE
    </p>
  </div>   <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      12:00-13:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
     AC02-014
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <p className={`${bebas_neue.className} relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      DANCE WORKSHOP
    </p>
  </div>   <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      12:00-18:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative md:ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
     ATRIUM
    </p>
  </div>
  <div className="border-b border-white flex items-center col-span-2">
    <p className={`${bebas_neue.className} relative ml-[5vh] font-medium text-2xl md:text-4xl text-[#FFFFFF] mb-4`}>
      JUST DANCE
    </p>
  </div>
</div>

</div>
<div className="ml-[2vh] md:ml-[10vh]">
            <p className={`${montserrat.className} -mt-6 p-4 text-medium relative font-medium md:text-xl text-[#FFFFFF] mb-4`}>
                Note: Events with no registration links attached to them don&apos;t require a registration. 
                </p>
              </div>
</Tab>
</Tabs>


        </main>
      )
}