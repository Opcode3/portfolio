import React from "react";
import { MailIcon, SendIcon } from "lucide-react";
import { InlineInput } from "./inline-input";
import Link from "next/link";
import Image from "next/image";
import { Manrope } from "@/app/fonts";

export default function contact() {
  const socialLinks: { url: string; label: string }[] = [
    { url: "", label: "/images/icons/whatsapp.png" },
    { url: "", label: "/images/icons/gmail.png" },
    { url: "", label: "/images/icons/x.png" },
    { url: "", label: "/images/icons/linkedin.png" },
    { url: "", label: "/images/icons/github.png" },
  ];
  return (
    <div className="relative block py-8 md:py-12 lg:py-16 min-h-[400px] px-[3%] md:px-[4%] lg:px-[6%] overflow-hidden">
      <div className=" max-w-[1000px] mx-auto relative z-10">
        <div className="flex flex-col">
          <h1 className="  pb-1 font-medium text-black-800 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Get In Touch
          </h1>
          <p
            className={` ${Manrope.className} col-span-4 text-base md:text-lg lg:text-xl leading-[160%] font-light text-black-800 max-w-[90%]`}
          >
            Got a vision? Challenge accepted. We thrive on turning dreams into
            reality. We Dare you to reach out and let&apos;s see if you're ready
            to play in the big leagues. Contact us now.
          </p>
          <div className="flex items-center gap-2 mt-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                className=" bg-primary group bg-opacity-45  rounded-2xl overflow-hidden flex  text-base relative items-center justify-center w-10 h-10 truncate font-light"
              >
                <Image
                  src={social.label}
                  alt=""
                  width={26}
                  height={26}
                  className=" object-contain grayscale transition-all group-hover:grayscale-0 "
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="py-4 md:py-6 lg:py-10">
          <InlineInput text="Hi, I'm " placeholder="Name*" />
          <InlineInput text="and I work with" placeholder="Company" />
          <InlineInput text="You can reach me at " placeholder="Phone*" />
          <InlineInput text="or at " placeholder="Email*" />
          <InlineInput text="" placeholder="Message*" />

          <button className=" flex bg-primary hover:bg-opacity-60 transition-all text-white font-light py-2 md:py-3 lg:py-4  px-4 md:px-6 lg:px-8 rounded-2xl mt-5 md:mt-6 lg:mt-9 xl:mt-12  gap-3 items-center text-2xl md:text-3xl lg:text-4xl xl:text-6xl  justify-center">
            Send Message{" "}
            <SendIcon
              stroke="#fff"
              className=" w-[24px] md:w-[30px] lg:w-[40px] xl:w-[50px] h-[24px] md:h-[30px] lg:h-[40px] xl:h-[50px]"
            />
          </button>
        </div>
      </div>
      <div className=" bg-shape2 bg-contain bg-no-repeat animate-bounce-slow w-24 h-24 block absolute top-[20%] left-14 z-0"></div>
      <div className=" bg-shape3 bg-contain bg-no-repeat animate-wiggle-slow w-44 h-44 block absolute bottom-[35%] right-20 z-0"></div>
    </div>
  );
}
