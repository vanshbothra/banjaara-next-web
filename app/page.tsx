import HomeCard from "@/components/home-card";
import {Image, Card, CardBody, CardFooter} from "@nextui-org/react";

export default function Home() {
  return (
    <main className="min-h-screen py-14 px-24">
      <div className="w-3/5 h-2/5 mx-auto mb-[20vh]">
        <Image isBlurred src='/banjaara-logo.png' alt="Banjaara Logo" className="object-cover" />
      </div>
      <Card shadow="sm" className="w-3/5 mx-auto" isPressable>
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
        </Card>
    </main>
  );
}
