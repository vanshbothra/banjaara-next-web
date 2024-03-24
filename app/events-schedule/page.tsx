import React, { ReactNode } from "react";
import { Montserrat, Poppins } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { Tabs, Tab, Card, CardBody, CardHeader, Textarea, Divider, Button, Link, Chip } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";

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
  
export default function eventsschedule(){
    return (
        <main>
          <div className="flex justify-center">
                <p className={`${montserrat.className} text-center relative mt-[7vh] mb-[5vh] font-medium md:text-6xl text-5xl text-[#FFFFFF]`}>
                  EVENTS SCHEDULE
                  </p>
            </div>
            <div className="grid grid-cols-2">
            <div className="ml-[5vh] md:ml-[10vh]">
            <p className={`${montserrat.className} relative font-medium text-2xl text-[#FFFFFF]`}>
                6th April
                </p>
                <p className={`${montserrat.className} relative font-medium text-2xl text-[#FFFFFF]`}>
                SCHEDULE
                </p>
                </div>
                <p className={`${montserrat.className} relative ml-[5vh] font-medium text-4xl md:text-6xl text-[#FFFFFF]`}>
                DAY 1
            </p>
            </div>
    <div className="flex items-center justify-center mt-8 mb-8 px-8">
    <div className="border-t border-white grid grid-cols-2 grid-rows-16 gap-y-4 relative w-full">
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl`}>
      10:00-15:00
    </p>
  </div>
  <div className="mt-4 border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      FOOTLOOSE - WESTERN DANCE
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      11:00-17:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      MUKHAUTA - STAGE PLAY
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      10:00-14:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      MARKETING 101
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      12:30-17:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      SAMADHAN - CASE COMPETITION
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      17:00-19:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      DANCE-OFF
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      10:00-13:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      JUKEBOX - INSTRUMENTAL
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      14:00-17:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      BATTLE OF THE BANDS
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      10:00-17:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      BANJAARA STOCK EXCHANGE
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      10:00-17:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      AAINA - PORTRAIT PHOTOGRAPHY
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      11:00-14:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      SYMPHONY OF SUSPICION
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      14:00-17:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      SHIPWRECK
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      11:00-13:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      MIDSUMMER MUSE - SHAKERSPEAREAN DECLAMATION
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      14:00-17:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      SPACE TURTLE - GRAPHIC CODING
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      11:00-17:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      VALORANT
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      10:00-16:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      ASHOKA PARLIAMENTARY DEBATE
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      ONLINE
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      STARSTRUCK - GRAPHIC DESIGN
    </a>
  </div>
</div>
</div>


            <div className="mt-20 grid grid-cols-2">
            <div className="ml-[5vh] md:ml-[10vh]">
            <p className={`${montserrat.className} relative font-medium text-2xl text-[#FFFFFF]`}>
                7th April
                </p>
                <p className={`${montserrat.className} relative font-medium text-2xl text-[#FFFFFF]`}>
                SCHEDULE
                </p>
                </div>
                <p className={`${montserrat.className} relative ml-[5vh] font-medium text-4xl md:text-6xl text-[#FFFFFF]`}>
                DAY 2
            </p>
            </div>
<div className="flex items-center justify-center mt-8 mb-8 px-8">
    <div className="border-t border-white grid grid-cols-2 grid-rows-16 gap-y-4 relative w-full">
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl`}>
      11:00-15:00
    </p>
  </div>
  <div className="mt-4 border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      THAIRAAV - INDIAN GROUP DANCE
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      15:00-17:00
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      CONCORDIA - ACAPELLA
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      11:00-17:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      TRASHIONISTA - SUSTAINABLE COUTURE
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      10:00-16:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      NAUTANKI - NUKKAD NATAK
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      16:00-16:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      FOOD FIESTA - EATING COMPETITION
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      11:00-15:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      BARRIER BARRAGE - CRISIS COMPETITION
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      12:00-14:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      SUKHANWAR - HINDUSTANI POETRY
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      14:00-17:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      RAHGEER - SLAM POETRY
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      11:00-17:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      FIFA
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      12:00-15:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      IN-QUIZ-ITIVE - QUIZ COMPETITION
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      10:00-17:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      BANJAARA STOCK EXCHANGE
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      11:00-17:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      GREEN INNOVATOR&apos;S CHALLENGE
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      13:00-17:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      STANDUP STANDOFF
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      11:00-14:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      ASHOKA PARLIAMENTARY DEBATE
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      10:00-16:00
    </p>
  </div>
  <div className=" border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      ASHOKA PARLIAMENTARY DEBATE
    </a>
  </div>
  <div className="border-b border-white flex items-center">
    <p className={`${bebas_neue.className} relative ml-[3vh] md-ml-[5vh] font-medium text-[#FFFFFF] text-2xl -mt-2`}>
      ONLINE
    </p>
  </div>
  <div className="border-b border-white flex items-center">
    <a href="/competitions" className={`${bebas_neue.className} underline relative ml-[5vh] font-medium text-4xl text-[#FFFFFF] mb-4`}>
      SAFARNAME - SHORT FILM MAKING
    </a>
  </div>
</div>

</div>


        </main>
      )
}