'use client'
import React from "react";
import { Poppins } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { Tabs, Tab, Card, CardBody, CardHeader, Image, Textarea, Divider, Button, Link, Chip } from "@nextui-org/react";
import content from './content.json'

const poppins = Poppins({
  subsets: ["latin"],
  weight: '300'
})

const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: '400'
})

const Competitions = () => {
  return (
    <div 
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
      <div className="w-full gap-2 my-auto">
        <Card className="my-auto justify-center h-full">
          <CardHeader className="absolute z-10 h-2/5 justify-center">
            <p className={`${bebas_neue.className} text-white font-medium text-8xl`}>
              Competitions
              </p>
          </CardHeader>
          <Image
            style={{ opacity: '50%' }}
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-1/5 object-cover"
            src="/competitions.JPG"
          />
        </Card>
      </div>
      <div className="flex flex-col items-center w-full gap-3 p-4 overflow-hidden"
        style={{
          minHeight: 650
        }} >
        {renderCards()}
      </div>
    </div>
  )

  function renderCards() {
    return (
      <Tabs
        aria-label="Dynamic tabs"
        items={content}
        variant="bordered"
        className="flex flex-row">
        {(item) => (
          <Tab
            key={item.id}
            title={item.label}
            className={`${bebas_neue.className} text-xl`}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '40px'
              }}>
              {item.content.map((content) =>
                <Card
                  key={item.label}
                  style={{
                    height: '550px',
                    width: '380px',
                    backgroundColor: 'transparent',
                    padding: 6,
                    objectFit: 'contain',
                    borderWidth: '1px',
                    borderColor: 'white'
                  }}
                >
                  <CardBody className="p-4"
                  >
                    <Card className="my-auto items-end"
                      style={{
                        height: '180px',
                        objectFit: 'contain'
                      }}
                    >
                      <Chip variant='bordered'
                        className="absolute z-10 p-2 m-4"
                        style={{
                          borderColor: 'purple',
                          backgroundColor: 'purple'
                        }}
                        size="lg"
                      >{content.date}</Chip>
                      <Image
                        isBlurred
                        className="z-0 w-full object-cover rounded"
                        style={{
                          height: '180px',
                          width: '100%'
                        }}
                        alt="Card background"
                        removeWrapper
                        src={content.image} />
                    </Card>
                  </CardBody>
                  <CardHeader
                    className="pb-0 py-4 px-4 flex-col items-center gap-2 ">
                    <p
                      className="text-3xl uppercase font-bold text-center">
                      {content.eventName}
                    </p>
                    <small
                      className={`${poppins.className} text-md text-center text-default-500`}
                      style={{
                        height: '200px',
                        textJustify: 'inter-word',
                        objectFit: 'contain'
                      }}>
                      {content.description}
                    </small>
                    <Button
                      href={content.link}
                      as={Link}
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
    )
  }
}

export default Competitions
