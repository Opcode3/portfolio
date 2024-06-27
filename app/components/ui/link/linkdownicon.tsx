import React from "react";

export const LinkDownIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={` stroke-primary stroke-2`}
    >
      <path d="M12 19V5" strokeLinecap="round" strokeLinejoin="round"></path>
      <path
        d="M19 12L12 5L5 12"
        // className={` stroke-primary stroke-2`}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
