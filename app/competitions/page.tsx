'use client'
import React from "react";
import { Poppins} from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { Tabs, Tab, Card, CardBody, CardHeader, Image, Textarea, Divider, Button, Link, Chip } from "@nextui-org/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: '300'
})

const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: '400'
});

const Competitions = () => {
  let tabs = [
    {
      id: "performing-arts",
      label: "Performing Arts",
      content: [
        {
          image: '/events/drums.JPG',
          eventName: 'FOOTLOOSE',
          date: '06/04/2024',
          description: 'Feel the high energy, get swept away by the captivating rhythm, and move to the groovy beats at our premier western dance competition!'
        },
        {
          image: '/competitions.jpg',
          eventName: 'THAIRAAV',
          date: '06/04/2024',
          description: 'Perform any Indian classical or folk style with your team! Bollywood, semi-classical and fusion styles are not allowed.'
        },
        {
          image: '/competitions.jpg',
          eventName: 'DANCE OFF',
          date: '06/04/2024',
          description: 'Whether you\'re into hip-hop or freestyle, ballet or bharatnatyam, salsa or contemporary, this is your chance to shine!'
        },
        {
          image: '/competitions.jpg',
          eventName: 'BATTLE OF THE BANDS',
          date: '06/04/2024',
          description: 'With blazing guitars and booming drums, come and participate in this high-energy showdown between the best of bands.'
        },
        {
          image: '/competitions.jpg',
          eventName: 'CONCORDIA',
          date: '06/04/2024',
          description: 'From intricate vocal arrangements to beautiful melodies, be captivated by the sheer talent and creativity in this vocal-only showdown.'
        },
        {
          image: '/competitions.jpg',
          eventName: 'JUKEBOX',
          date: '06/04/2024',
          description: 'From breathtaking solos to mesmerizing duets and trios, witness the musical talent of the instrumentalists as they light up the stage.'
        },
        {
          image: '/competitions.jpg',
          eventName: 'NAUTANKI',
          date: '06/04/2024',
          description: 'From the legendary fables of the gallis to the untold tales of the nukkads, come weave magic with your words and gestures.'
        },
        {
          image: '/competitions.jpg',
          eventName: 'FOOD FIESTA',
          date: '06/04/2024',
          description: 'Here is your chance to see how much you can eat within 2 minutes! With no limit on the amount of food, the winner takes all! '
        },
        {
          image: '/competitions.jpg',
          eventName: 'STANDUP STANDOFF',
          date: '06/04/2024',
          description: 'Prepare to unleash waves of laughter in the ultimate showcase of comedic brilliance as participants embark on a journey to prove if their wit can reign supreme.'
        },
        {
          image: '/competitions.jpg',
          eventName: 'MUKHAUTA',
          date: '06/04/2024',
          description: 'Come gather your theater troupe, polish your lines, and let your passion for the craft shine as you compete for our very own stage play competition!'
        },
      ]
    },
    {
      id: "literary-arts",
      label: "Literary Arts",
      content: [{
        image: '/competitions.jpg',
        eventName: 'FOOTLOOSE',
        date: '06/04/2024',
        description: 'Feel the high energy, get swept away by the captivating rhythm, and move to the groovy beats at our premier western dance competition!'
      }]
    },
    {
      id: "visual-arts",
      label: "Visual Arts",
      content: [{
        image: '/competitions.jpg',
        eventName: 'FOOTLOOSE',
        date: '06/04/2024',
        description: 'Feel the high energy, get swept away by the captivating rhythm, and move to the groovy beats at our premier western dance competition!'
      }]
    },
    {
      id: "innovation-and-tech",
      label: "Innovation and Tech",
      content: [{
        image: '/competitions.jpg',
        eventName: 'FOOTLOOSE',
        date: '06/04/2024',
        description: 'Feel the high energy, get swept away by the captivating rhythm, and move to the groovy beats at our premier western dance competition!'
      }]
    }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
      <div className="w-full gap-2 my-auto">
        <Card className="my-auto justify-center" style={{
          height: '100%'
        }}>
          <CardHeader className="absolute z-10 h-2/5 justify-center">
            <p className={`${bebas_neue.className} text-white font-medium text-8xl`}>Competitions</p>
          </CardHeader>
          <Image
            style={{ opacity: '50%' }}
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-1/5 object-cover"
            src="/competitions.jpg"
          />
        </Card>
      </div>
      <div className="flex flex-col items-center w-full gap-3 p-4 overflow-hidden" >
        <Tabs aria-label="Dynamic tabs" items={tabs} color="secondary" size="lg" radius="full" variant="bordered" className="flex flex-row z-[1]">
          {(item) => (
            <Tab key={item.id} title={item.label} className={`${bebas_neue.className} text-xl`}>
              <div className="gap-10" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {item.content.map((content, index) =>
                  <Card className=" h-full border-1 border-white" key={index}
                    style={{
                      width: '300px', backgroundColor: 'transparent', padding: 6, objectFit: 'contain'
                    }}
                  >
                    <CardBody className="p-4"
                    >
                      <Card className=" my-auto items-end" 
                      style={{
                        height: '180px',  objectFit: 'contain'
                     }}
                         >

                        <Chip variant='bordered' className="absolute z-10 p-2 m-2"
                          style={{
                            borderColor: 'purple', backgroundColor: 'purple'
                          }}
                        >{content.date}</Chip>
                        <Image
                          isBlurred
                          className="z-0 w-full object-cover rounded"
                          style={{
                            height: '100%',
                            width: '100%'
                          }}
                          alt="Card background"
                          removeWrapper
                          src={content.image} />
                      </Card>

                    </CardBody>
                    <CardHeader className="pb-0 py-4 px-4 flex-col items-center gap-2 ">
                        <p className="text-3xl uppercase font-bold">{content.eventName}</p>
                      <small className={`${poppins.className} text-md text-center text-default-500`}
                      style={{
                        height: '170px', textJustify: 'inter-word', objectFit: 'contain'
                      }}>{content.description} </small>
                      <Button
                        href="#"
                        as={Link}
                        className={`${poppins.className}`}
                        style={{ backgroundColor: 'purple' }}
                        showAnchorIcon
                        variant="solid"
                        startContent='link'
                      >
                        Sign Up
                      </Button>
                    </CardHeader>
                  </Card>
                )
                }</div>
            </Tab>
          )}

        </Tabs>
      </div>
    </div>
  );
}
export default Competitions
