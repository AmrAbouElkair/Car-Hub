"use client";
import { useState } from "react";

import { Card, CardHeader, CardBody } from "@nextui-org/card";

import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import { CardDetails } from ".";
import { Button } from "@nextui-org/button";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, make, model, drive, transmission, year } = car;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <>
      <Card className="group rounded-3xl bg-primary-blue-100 p-3 shadow-none duration-200 hover:bg-white hover:shadow-lg">
        <CardHeader>
          <div className="car-card__content-title">
            <h2 className="car-card__content-title">
              {make} {model}
            </h2>
            <p className="mt-6 flex text-[32px] font-extrabold leading-[38px]">
              <span className="self-start text-[14px] font-semibold leading-[17px]">
                $
              </span>
              {carRent}
              <span className="self-end text-[14px] font-medium leading-[17px]">
                /day
              </span>
            </p>
          </div>
        </CardHeader>
        <CardBody>
          <div className="relative my-3 h-40 w-full">
            <Image
              src={generateCarImageUrl(car)}
              alt="car-model"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="relative mt-2 flex w-full">
            <div className="flex w-full justify-between text-grey group-hover:invisible">
              <div className="flex flex-col items-center justify-center gap-2">
                <Image
                  src="/steering-wheel.svg"
                  width={20}
                  height={20}
                  alt="steering-wheel"
                />
                <p className="text-[14px] leading-[17px]">
                  {transmission === "a" ? "Automatic" : "Manual"}
                </p>
              </div>
              <div className="car-card__icon">
                <Image src="/tire.svg" width={20} height={20} alt="tireImg" />
                <p className="car-card__icon-text">{drive.toUpperCase()}</p>
              </div>
              <div className="car-card__icon">
                <Image src="/gas.svg" width={20} height={20} alt="gasImg" />
                <p className="car-card__icon-text">{city_mpg} MPG</p>
              </div>
            </div>
            <div className="car-card__btn-container">
              <Button
                color="primary"
                radius="full"
                size="lg"
                className="mt-6 flex w-full items-center py-[16px] text-[14px] font-bold leading-[17px]"
                endContent={
                  <i className="fa-solid fa-circle-arrow-right text-white"></i>
                }
                onPress={() => setIsOpen(true)}
              >
                View More
              </Button>
            </div>
          </div>
        </CardBody>
        <CardDetails
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          car={car}
        />
      </Card>
    </>
  );
};

export default CarCard;
