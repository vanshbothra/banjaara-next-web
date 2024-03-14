import HomeCard from "@/components/home-card";
import {Image, Card, CardBody, CardFooter, Textarea} from "@nextui-org/react";
import ImageGrid from "@/components/home-image-grid";
import { TextGenerateEffectDemo } from "@/components/home-theme";
import { TextGenerateEffect } from "@/components/text-gen-effect";

export default function Home() {
  return (
    <main className="min-h-screen py-24 px-4 sm:py-14 sm:px-24">
      <div className="w-5/6 sm:w-3/5 sm:h-2/5 max-sm:mb-[30vh] max-sm:mt-[15vh] mx-auto mb-[20vh]">
        <Image isBlurred src='/banjaara-logo.png' alt="Banjaara Logo" className="object-cover" />
        <div className="relative z-10 mt-0">
          <TextGenerateEffectDemo />
          
        </div>
        
      </div>
      
      <Card className="p-1 m-12 bg-transparent">
      <CardBody>
        <p className="text-6xl text-center">6-7th April, 2024</p>
      </CardBody>
    </Card>
      <ImageGrid />
      {/* <Card shadow="sm" className="w-3/5 mx-auto" isPressable>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="Cover Image"
              className="w-full object-cover h-[140px]"
              src="/public/Stage.jpg"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Banjaara &apos;23</b>
            <p className="text-default-500">Rs. 100</p>
          </CardFooter>
        </Card> */}
    </main>
  );
}
