import { Syne } from "@/app/fonts";
import React from "react";

export const InlineInput = ({
  text,
  placeholder,
}: {
  text: string;
  placeholder: string;
}) => {
  return (
    <label
      htmlFor={placeholder}
      className="flex text-2xl lg:text-3xl xl:text-[40px] items-center text-nowrap mb-1 py-1 md:py-2 lg:py-3 "
    >
      {text}
      <input
        className={` ${Syne.className}  ${
          text.length > 2 ? "ml-2" : ""
        }  w-full outline-none focus:pl-3 transition-all border-b-2 rounded-sm border-primary focus:border-[#697a1a] bg-transparent placeholder-primary`}
        placeholder={placeholder}
        type="text"
        name=""
        id={placeholder}
      />
    </label>
  );
};
