"use client";

// this is a component in next that is responsible for the navigation without reloading the page

import Link from "next/link";

//this is a react hook that will returns the url of the active page

import { usePathname } from "next/navigation";

import {
  LayoutGridCircles,
  ArrowLeftRight,
  Wallet,
  ChartNoAxesColumnIncreasing,
  LogOut,
} from "lucide-react";

// () we use this Parentheses to can write a jsx code

// <> this is a react fragment we use it as any component returns only one element , so we wrap all the elements in it to can return multiple elements

// we define the array here to not to be loaded again by each re-render "better performance"

const pages = [
  {
    name: "OverView",
    path: "/",
    icon: LayoutGridCircles,
  },
  {
    name: "Transictions",

    // note: in the href we don't write /page.tsx as the href will be sent to the browser and the browser will not understand it as this is releated to next only

    path: "/transictions",

    // the icons in lucide react is like a function that will draw the icon , so here we only put the icon name then we will call the function in the return (</..>)

    icon: ArrowLeftRight,
  },
  {
    name: "Budgets",
    path: "/budgets",
    icon: Wallet,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: ChartNoAxesColumnIncreasing,
  },
];

export default function Sidebar() {
  // we use const as every time we click on a link the whole component will be re-rendered

  const pathName = usePathname();

  return (
    <div className="w-2xs h-screen rounded-tr-3xl rounded-br-3xl bg-[#0F123F]">
      <div className="pt-16 pl-10 flex items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-[#FE981E] relative flex items-center justify-center">
          <p className="text-white font-bold text-3xl z-10 font-outfit">E</p>
          <div className="w-7 h-7 rounded-tr-xl rounded-bl-xl bg-[#FFBB6A] absolute bottom-0 left-0"></div>
        </div>
        <p className="text-white font-outfit font-medium text-xl leading-none tracking-tight">
          ExpensePulse
        </p>
      </div>

      <div className="flex flex-col gap-7 mt-14 pl-12">
        {pages.map((page) => {
          // this variable name must be capital as it wil store a component , so to be able to use it later

          const Icon = page.icon;

          const isActive = pathName === page.path;

          return (
            <Link
              key={page.path}
              href={page.path}
              className="flex gap-3 items-center relative"
            >
              <Icon
                className={`w-6 h-6 ${
                  isActive ? "text-[#FE981E]" : "text-[#67698E]"
                }`}
              ></Icon>
              <p
                className={`font-outfit font-medium text-base leading-normal ${
                  isActive ? "text-[#FE981E]" : "text-[#67698E]"
                }`}
              >
                {page.name}
              </p>

              {isActive && (
                <div className="w-1 h-6 rounded-tl-xs rounded-bl-xs bg-[#FE981E] absolute right-0"></div>
              )}
            </Link>
          );
        })}
      </div>

      <Link href={"/login"} className=" mt-64 pl-12 flex gap-7 items-center">
        <LogOut className="w-6 h-6 text-[#FE981E]" />

        <span className="font-outfit font-medium text-base leading-normal text-[#FE981E]">
          Log out
        </span>
      </Link>
    </div>
  );
}
