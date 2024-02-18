"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";

const Hero = () => {
  const handleClick = () => {
    // alert("clicked");
  };

  return (
    <section className="relative z-0 mx-auto flex max-w-[1440px] flex-col gap-5 xl:flex-row">
      <div className="flex-1 px-6 pt-36 sm:px-16">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <Button
          color="primary"
          radius="full"
          size="lg"
          className="mt-6"
          onPress={handleClick}
          href="#car-cards"
        >
          <span>Explore Cars</span>
        </Button>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </section>
  );
};

export default Hero;
