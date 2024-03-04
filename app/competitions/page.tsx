'use client'
import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader, Image, Textarea, Divider, Button, Link } from "@nextui-org/react";

const Competitions = () => {
  let tabs = [
    {
      id: "performing-arts",
      label: "Performing Arts",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "literary-arts",
      label: "Literary Arts",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: "visual-arts",
      label: "Visual Arts",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: "innovation-and-tech",
      label: "Innovation and Tech",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
      <div className="w-full gap-2 my-auto">
        <Card className=" my-auto justify-center">
          <CardHeader className="absolute z-10 justify-center my-auto">
            <p className="text-white font-medium text-6xl mx-auto">Competitions</p>
          </CardHeader>
          <Image
            style={{ opacity: '50%' }}
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/competitions.jpg"
          />
        </Card>
      </div>
      <div className="flex flex-col items-center w-full gap-3 p-4 overflow-hidden" >
        <Tabs aria-label="Dynamic tabs" items={tabs} variant="bordered">
          {(item) => (
            <Tab key={item.id} title={item.label} >
              <Card className="py-4 h-full border-1 border-white" 
              style={{
                width: '300px', backgroundColor: 'transparent', padding: 6
              }}
              >
                <CardBody className=" overflow-hidden py-2">
                  <Image
                    isBlurred
                    alt="Card background"
                    className="object-contain rounded"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={270}
                    height={80} />
                </CardBody>
                <CardHeader className="pb-0 py-4 px-4 flex-col items-center gap-2">
                  <p className="text-xl uppercase font-bold">Event Name</p>
                  <small className="text-default-500 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </small>
                  <Button
                    href="#"
                    as={Link}
                    color="primary"
                    showAnchorIcon
                    variant="solid"
                    startContent='link'
                  >
                    Sign Up
                  </Button>
                </CardHeader>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
  );
}
export default Competitions
