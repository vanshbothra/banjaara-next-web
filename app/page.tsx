import HomeCard from "@/components/home-card";
import {Image, Card, CardBody, CardFooter, Textarea, CardHeader, Divider} from "@nextui-org/react";
import ImageGrid from "@/components/home-image-grid";
import { TextGenerateEffectDemo } from "@/components/home-theme";
import Countdown from "@/components/counter";
import { Montserrat } from 'next/font/google';
import Link from "next/link";
import { Sponsors } from "@/components/sponsors";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "800",
})

export default function Home() {
  return (
    <main className="min-h-screen py-24 px-4 sm:py-14 sm:px-24">
      <div className="w-5/6 sm:w-3/5 sm:h-2/5 max-sm:mb-[15vh] max-sm:mt-[15vh] mx-auto mb-[20vh]">
        <Image isBlurred src='/banjaara-star-logo.png' alt="Banjaara Logo" className="object-cover" />
        <div className="relative z-10 mt-0">
          <TextGenerateEffectDemo />
        </div>
      </div>
      
      <Card className="sm:p-1 max-sm:mb-8 sm:m-12 border-none bg-transparent shadow-none">
        <Countdown />
      </Card>

      <div className="mb-[10vh] sm:mb-[20vh] max-w-full grid grid-cols-12 sm:px-8 px-2">
        <Card isFooterBlurred isBlurred className="col-span-12 border-none bg-background/60 dark:bg-default-100/50">
          <CardHeader className={`${montserrat.className} sm:text-4xl text-xl font-bold justify-center`}>
            Banjaara 2024 - 6th & 7th April
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="p-4">Banjaara is Ashoka University&apos;s student-led annual flagship cultural fest that attracts youth from the top colleges of the Delhi-NCR region and other parts of the country. Banjaara 2024, which is to be held on the 6th & 7th April, will host a variety of competitive and informal events, which include music, theatre, dance, entrepreneurship, and more. There will also be a range of student-driven stalls selling food, beverages, and a range of products.</p>
            <p className="p-4"> The theme for this year&apos;s edition of Banjaara is Sitārā: A Journey Towards The Stars, which symbolises afresh start, a galactic experience of boundless joy, literally till the stars!</p>
          </CardBody>
          <Divider />
          <CardFooter className="bg-white/30 border-t-1 border-zinc-100/50 z-10 justify-center py-4 max-sm:px-4">
            <p>
              Registrations for this year have begun! Click <Link href="https://unstop.com/college-fests/banjaara-2024-ashoka-university-sonepat-haryana-221389" className="font-bold text-black underline">here</Link> to register!!
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* <div className="max-w-full grid grid-cols-12 sm:px-8 sm:mb-[5vh]">
        <Card className={`${montserrat.className} text-center shadow-none col-span-12 bg-transparent border-none sm:text-8xl`}>
          Our Sponsors
        </Card>
      </div>
      <Sponsors /> */}

      <div className="max-w-full grid grid-cols-12 sm:px-8 sm:mb-[5vh]">
        <Card className={`${montserrat.className} py-[10px] text-center shadow-none col-span-12 bg-transparent border-none sm:text-8xl`}>
          Banjaara 2023
        </Card>
      </div>
      <ImageGrid />
    </main>
  );
}
