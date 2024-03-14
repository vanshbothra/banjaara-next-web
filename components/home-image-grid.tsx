import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

const ImageGrid = () => {
  return (
    <div className="max-w-full sm:gap-6 gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px] hover:scale-110 hover:z-10">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/home-1.jpg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px] hover:scale-110 hover:z-10">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/home-2.JPG"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px] hover:scale-110 hover:z-10">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/home-3.jpg"
        />
      </Card>
      <Card className="w-full h-[300px] col-span-12 sm:col-span-5 hover:scale-110 hover:z-10">
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="/home-4.jpg"
        />
      </Card>
      <Card className="w-full h-[300px] col-span-12 sm:col-span-7 hover:scale-110 hover:z-10">
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="/Stage.jpg"
        />
      </Card>
    </div>
  )
}

export default ImageGrid
