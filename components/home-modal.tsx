'use client'

import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Link} from "@nextui-org/react";

export default function HomeModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  useEffect(() => {
    onOpen();
  }, [onOpen]);  
  return (
    <>
      <Modal placement="center" size="2xl" backdrop="blur" isOpen={isOpen} defaultOpen onOpenChange={onOpenChange}>
        <ModalContent className="dark text-center">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Attendee Registrations Open!</ModalHeader>
              <ModalBody>
                <p className="mb-5"> 
                  Registrations open for external attendees! Make the best out of your Banjaara and Ashoka experience register <Link target="_blank" color="secondary" href="https://unstop.com/events/attendee-registration-both-days-banjaara-2024-ashoka-university-sonepat-haryana-939845">here</Link> to attend both Karun & Nanku concert (Day 2) and get to attend Rajat Chauhan & Satyabrat standup show! (Day 1)
                </p>
                <p className="grid grid-flow-col col-span-12">
                  <span className="col-span-4"><Button color="secondary"><Link target="_blank" color="foreground" href="https://unstop.com/events/attendee-registration-day-1-banjaara-2024-ashoka-university-sonepat-haryana-939837">Day1</Link></Button></span>
                  <span className="col-span-4"><Button color="secondary"><Link target="_blank" color="foreground" href="https://unstop.com/events/attendee-registration-day-2-banjaara-2024-ashoka-university-sonepat-haryana-939840">Day2</Link></Button></span>
                  <span className="col-span-4"><Button color="secondary"><Link target="_blank" color="foreground" href="https://unstop.com/events/attendee-registration-both-days-banjaara-2024-ashoka-university-sonepat-haryana-939845">Both Days</Link></Button></span>
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {/* <Button color="primary">
                  <Link target="_blank" color="foreground" href="https://unstop.com/events/attendee-registration-both-days-banjaara-2024-ashoka-university-sonepat-haryana-939845">Register Now!</Link>
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
