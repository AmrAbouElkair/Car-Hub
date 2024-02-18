import React from "react";
import { footerLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { icons } from "@/constants";

const Footer = () => (
  <footer className="text-black-100 mt-5 border-t border-gray-100">
    <div className="mx-auto flex max-w-[90rem] gap-5 px-6 py-10 sm:px-16">
      <div className="flex flex-col items-start justify-start">
        <Image
          src="/logo.svg"
          alt="logo"
          width={140}
          height={140}
          className="object-contain"
        />
        <p className="mb-2 mt-3 text-base text-gray-700">
          Carhub 2023 All Rights Reserved &copy;
        </p>
        <div className="flex items-center justify-center gap-5 text-[1.75rem] leading-none text-gray-700">
          {icons.map(({ icon, url }) => (
            <Link
              key={icon}
              href={url}
              target="_blank"
              className="hover:text-primary-blue duration-150 ease-linear"
            >
              <i className={`fa-brands fa-sm fa-${icon}`}></i>
            </Link>
          ))}
        </div>
      </div>

      <nav className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>

    <div className="mt-10 flex flex-wrap items-center justify-between border-t border-gray-100 px-6 py-10 sm:px-16">
      <p>@2023 CarHub. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
