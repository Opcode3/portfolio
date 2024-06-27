import localFont from "next/font/local";

export const FuzzyBubbles = localFont({
    src: [
      {
        path: "../public/fonts/FuzzyBubbles-Bold.ttf",
        weight: "700",
        style: "normal",
      },
      {
        path: "../public/fonts/FuzzyBubbles-Regular.ttf",
        weight: "400",
        style: "normal",
      },
    ],
  });


  export const Syne = localFont({
    src: [
      {
        path: "../public/fonts/Syne-ExtraBold.ttf",
        weight: "900",
        style: "normal",

      },{
        path: "../public/fonts/Syne-Bold.ttf",
        weight: "700",
        style: "normal",

      },{
        path: "../public/fonts/Syne-SemiBold.ttf",
        weight: "600",
        style: "normal",

      },{
        path: "../public/fonts/Syne-Medium.ttf",
        weight: "500",
        style: "normal",

      },{
        path: "../public/fonts/Syne-Regular.ttf",
        weight: "400",
        style: "normal",

      },
    ],
    variable: '--font-syne'
  });


  export const Manrope = localFont({
    src: [
      {
        path: "../public/fonts/Manrope-VariableFont_wght.ttf",
        style: "normal",
      },
    ],
  });