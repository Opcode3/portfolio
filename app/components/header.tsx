"use client";
import React from "react";
import LogoIcon from "./ui/logo";
import { FuzzyBubbles, Manrope, Syne } from "../fonts";
import Link from "next/link";
import { LinkUpSlightIcon } from "./ui/link/linkupslight";
import { usePathname } from "next/navigation";

const Header = () => {
  const navLinks: { url: string; label: string }[] = [
    { url: "/", label: "Home" },
    { url: "/about-me", label: "About Me" },
    { url: "/projects", label: "Projects" },
    { url: "/escapades", label: "My Escapade" },
  ];

  const pathname = usePathname();

  return (
    <header
      className={`flex border-b items-center lg:py-4 pl-[3%] md:pl-[4%] lg:px-[6%] justify-between ${Manrope.className}`}
    >
      <div className="flex items-center justify-start gap-10 lg:gap-16">
        <div className=" w-fit">
          <span
            className={`${Syne.className} capitalize w-fit font-black text-xl sm:text-2xl lg:text-3xl xl:text-4xl`}
          >
            OpCode
          </span>
        </div>
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center gap-1">
            {navLinks.map((link, index) => (
              <li key={index} className=" group">
                <Link
                  href={link.url}
                  className={` ${
                    pathname == link.url ? " text-primary" : "text-black-800"
                  } text-base xl:text-lg group-hover:text-primary transition-all rounded-xl font-light py-2 px-3  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex gap-1 sm:gap-2 md:gap-4 items-center">
        <Link
          href={"/contact"}
          className={`flex items-center gap-1 md:gap-2 xl:gap-3 group ${
            pathname == "/contact" ? " lg:bg-primary" : "lg:bg-black-800"
          }  py-2 lg:py-3 px-4 lg:px-6 text-nowrap rounded-xl`}
        >
          <span
            className="text-black-800 lg:text-white text-xs sm:text-sm md:text-base lg:text-lg"
            style={{ fontWeight: "lighter" }}
          >
            Let&apos;s Talk
          </span>
          <span className={`w-4 md:w-5 lg:w-6 block`}>
            <LinkUpSlightIcon className="stroke-black-800 lg:stroke-white" />
          </span>
        </Link>
        <div className=" bg-black-800 py-4 flex items-center justify-center w-[60px] sm:w-[80px] md:w-[90px] lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
