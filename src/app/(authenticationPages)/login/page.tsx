//this is a component in next that make automatic optimization to the image to avoid the low performance of the website due to it's original space ,and make automatic lazy loading

import Image from "next/image";

export default function Login() {
  return (
    <div className="w-full h-full flex flex-row px-14 bg-[#101039]">
      <div className="w-xl flex flex-col gap-7 mt-13">
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
            <p className="font-outfit font-normal text-[#17172F] text-xs">
              A little momentum
            </p>
          </div>
        </div>
        <p className="font-outfit font-normal text-[#A5A5BD] text-sm">
          Clarity in every transaction, confidence in every move
        </p>
      </div>
    </div>
  );
}
