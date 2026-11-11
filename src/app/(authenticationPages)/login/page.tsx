//this is a component in next that make automatic optimization to the image to avoid the low performance of the website due to it's original space ,and make automatic lazy loading

import Image from "next/image";

export default function Login() {
  return (
    <div className="w-full h-full flex flex-row px-14 justify-between items-start bg-[#101039] pt-13">
      <div className="w-xl flex flex-col gap-7">
        <p className="font-outfit font-normal text-[#A5A5BD] text-xs">
          SMART INSIGHTS, ZERO COMPLEXITY
        </p>
        <p className="font-outfit font-normal text-7xl text-white">
          Good to have you back
        </p>

        <div className="relative w-[584px] h-[240px]">
          <Image
            src="/rotatingRing.png"
            // to take the whole width , and height of the parent , == to absolute

            fill
            // to avoid the image from destructing

            className="object-contain"
            alt="Rotating orange ring"
          />

          <div className=" w-[230px] flex flex-col bg-white rounded-2xl p-5 -rotate-[7deg] absolute bottom-1 left-1">
            <p className="font-outfit font-normal text-[#77778F] text-xs">
              Financial Overview
            </p>
            <p className="font-outfit font-normal text-[#17172F] text-xl">
              Total wealth secured
            </p>
          </div>

          <div className="w-[118px] flex flex-col bg-[#FF9815] rounded-xl p-4 rotate-[8deg] absolute top-2 right-6">
            <p className="font-outfit font-normal text-[#17172F] text-2xl">
              +10.2%
            </p>
            <p className="font-outfit font-thin text-[#17172F] text-[10.5px]">
              A little momentum
            </p>
          </div>
        </div>
        <p className="font-outfit font-normal text-[#A5A5BD] text-sm">
          Clarity in every transaction, confidence in every move
        </p>
      </div>

      <div className="w-xl flex flex-col p-10 bg-white rounded-3xl gap-5">
        <div className="flex flex-col gap-2">
          <p className="font-outfit font-normal text-[#9090A8] text-xs leading-[10px]">
            YOUR DASHBOARD IS READY
          </p>
          <p className="font-outfit font-normal text-[#17172F] text-3xl leading-[30px] mb-2">
            Let’s get you in
          </p>
          <p className="font-outfit font-normal text-[#85859B] text-sm mb-2">
            Pick up right where you left off
          </p>
        </div>
        <form className="flex flex-col gap-2">
          <label
            htmlFor=""
            className="font-outfit font-normal text-[#17172F] text-sm"
          >
            Email address
          </label>
          <input
            type="email"
            className="w-full font-outfit p-3 rounded-lg bg-[#F7F7FB] border border-[#E9EAF5] text-[#A0A0B4] text-xs outline-none mb-4"
            placeholder="your.email@expensepulse.com"
          />

          <label
            htmlFor=""
            className="font-outfit font-normal text-[#17172F] text-sm"
          >
            Password
          </label>
          <input
            type="password"
            className="w-full font-outfit p-3 rounded-lg bg-[#F7F7FB] border border-[#E9EAF5] text-[#A0A0B4] text-sm outline-none"
          />

          <button className="w-full p-3 rounded-lg bg-[#FF9815] font-bold text-md text-white my-5 cursor-pointer">
            Login
          </button>

          <div className="flex flex-col items-center gap-5">
            <div className="w-full h-[1px] bg-[#C4C0C0]"></div>
            <button className="font-outfit font-bold text-md text-[#D47B06] cursor-pointer">
              New here?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
