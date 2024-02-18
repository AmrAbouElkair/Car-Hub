"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const Header = () => (
  <header className="absolute  z-10 w-full">
    <nav className="mx-auto flex max-w-[1440px] items-center justify-between bg-transparent px-6 py-4 sm:px-16">
      <Link href="/" className="flex items-center justify-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={118}
          height={18}
          className="object-contain"
        />
      </Link>
      <Button radius="full" size="lg" className="bg-white text-primary-blue">
        Sign in
      </Button>
    </nav>
  </header>
);

export default Header;
