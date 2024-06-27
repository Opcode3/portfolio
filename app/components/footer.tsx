import React from "react";
import { Manrope, Syne } from "../fonts";
import { LinkDownIcon } from "./ui/link/linkdownicon";
import Link from "next/link";
import LogoIcon from "./ui/logo";
import {
  GitBranch,
  Github,
  Instagram,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { LinkUpSlightIcon } from "./ui/link/linkupslight";

const Footer = () => {
  const contactMe = [
    {
      desc: "Looking for a developer to build from scratch your idea?",
      contact: "josephemmanuelemeka@gmail.com",
      url: "mailto:josephemmanuelemeka@gmail.com",
    },
    {
      desc: "Want a more in-depth look at my history and capability?",
      contact: "+234 815 979 2686",
      url: "tel:+234 815 979 2686",
    },
  ];

  const socials = [
    {
      icon: (
        <TwitterIcon
          strokeWidth={1}
          size={"100%"}
          className="hover:stroke-primary transition-all"
        />
      ),
      url: "",
      title: "X",
    },
    {
      icon: (
        <LinkedinIcon
          strokeWidth={1}
          size={"100%"}
          className="hover:stroke-primary transition-all"
        />
      ),
      url: "",
      title: "LinkedIn",
    },
    {
      icon: (
        <Github
          strokeWidth={1}
          size={"100%"}
          className="hover:stroke-primary transition-all"
        />
      ),
      url: "",
      title: "Github",
    },
    {
      icon: (
        <Instagram
          strokeWidth={1}
          size={"100%"}
          className="hover:stroke-primary transition-all"
        />
      ),
      url: "",
      title: "Instagram",
    },
  ];
  return (
    <footer
      className={`${Syne.className} text-white bg-black-800 font-bold px-[4%] lg:px-[6%] footer pt-[40px] md:pt-[60px] lg:pt-[90px] xl:pt-[110px] pb-[30px] md:pb-[60px]`}
    >
      <div className="container mx-auto">
        <div className="">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-7 items-center">
            <li className="flex ml-2 md:ml-0 flex-col gap-4 md:gap-7 lg:gap-10 relative before:absolute before:-z-0 z-0 before:contents-[''] before:h-10 before:w-10 md:before:h-14 md:before:w-14 xl:before:h-20 xl:before:w-20 before:rounded-[17px] md:before:rounded-[20px] xl:before:rounded-[34px] before:bg-primary">
              <h4 className="text-4xl md:text-5xl xl:text-6xl relative z-0">
                Let's work together
              </h4>
              <div className="flex items-center gap-2 ">
                <strong className="text-sm md:text-base lg:text-lg font-bold">
                  Based in Nigeria
                </strong>
                <div className="flex gap-1 md:gap-2 lg:gap-4 items-center relative pl-3 md:pl-4 lg:pl-6 before:contents-[''] before:h-full before:w-7 before:left-0 before:border-l-2 before:border-l-white before:absolute">
                  {socials.map((social) => (
                    <i
                      key={social.title}
                      title={social.title}
                      className=" w-4 md:w-5 h-4 md:h-5 cursor-pointer "
                    >
                      {social.icon}
                    </i>
                  ))}
                </div>
              </div>
            </li>
            {contactMe.map((item) => (
              <li
                key={item.contact}
                className="min-h-[130px] md:min-h-[160px] lg:min-h-[250px] flex flex-col justify-between py-2 md:py-4 lg:py-6 px-4 md:px-6 lg:px-8 border border-border-color rounded-3xl "
              >
                <p className="text-lg md:text-xl lg:text-2xl">{item.desc}</p>
                <Link
                  title={item.contact}
                  href={item.url}
                  className=" text-base md:text-lg lg:text-xl grid grid-cols-[auto_40px] gap-3 items-center justify-between"
                >
                  <p className=" truncate text-primary">{item.contact}</p>
                  <div className=" w-10 h-10 block">
                    <LinkUpSlightIcon className="stroke-white" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className=" py-6 md:py-10 lg:py-15">
            <LogoIcon />
          </div>
        </div>

        <div className=" flex flex-col-reverse sm:flex-row justify-between border-t border-border-color pt-4">
          <span
            className={` ${Manrope.className} font-light text-sm md:text-base `}
          >
            &copy; 2024 Joseph Emeka, All Rights Reserved
          </span>
          <Link
            href={"#"}
            className={` ${Manrope.className} hover:text-primary text-nowrap justify-end flex gap-1 text-sm md:text-base  font-light transition-all`}
          >
            Back to Top <LinkDownIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
