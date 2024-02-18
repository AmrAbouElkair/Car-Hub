import { CarDetailsProps } from "@/types";
import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { generateCarImageUrl } from "@/utils";

const CardDetails = ({ car, closeModal, isOpen }: CarDetailsProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal} hideCloseButton size="xl">
        <ModalContent className="relative py-5">
          <Button
            isIconOnly
            variant="solid"
            radius="full"
            onPress={closeModal}
            className="absolute right-3 top-3 z-50 bg-white text-black"
          >
            <i className="fa-solid fa-xmark fa-xl"></i>
          </Button>
          <ModalBody>
            <div className="flex flex-1 flex-col gap-3">
              <div className="relative h-40 w-full rounded-lg bg-pattern bg-cover bg-center">
                <Image
                  src={generateCarImageUrl(car)}
                  alt="car model"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex gap-3">
                <div className="relative h-24 w-full flex-1 rounded-lg bg-primary-blue-100">
                  <Image
                    src={generateCarImageUrl(car, "29")}
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="relative h-24 w-full flex-1 rounded-lg bg-primary-blue-100">
                  <Image
                    src={generateCarImageUrl(car, "33")}
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="relative h-24 w-full flex-1 rounded-lg bg-primary-blue-100">
                  <Image
                    src={generateCarImageUrl(car, "13")}
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="mt-3 flex flex-1 flex-col gap-2">
              <h2 className="text-xl font-semibold capitalize">
                {car.make} {car.model}
              </h2>
              <div className="mt-3 flex flex-wrap gap-4">
                {Object.entries(car).map(([key, value]) => (
                  <div
                    className="flex w-full justify-between gap-5 text-right"
                    key={key}
                  >
                    <h4 className="capitalize text-grey">
                      {key.split("_").join(" ")}
                    </h4>
                    <p className="font-semibold text-black-100">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardDetails;
