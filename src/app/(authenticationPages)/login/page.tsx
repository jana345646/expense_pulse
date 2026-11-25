"use client";

//this is a component in next that make automatic optimization to the image to avoid the low performance of the website due to it's original space ,and make automatic lazy loading

import Image from "next/image";

// to destruct from it the functions that we will use to handle the form

import { useForm } from "react-hook-form";

// to navigate to the page automatically without clicking on a link

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/stores/useAuthStore";

import { loginSchema, loginFormData } from "@/schemas/loginSchema";

// to connect the schema with react hook form

import { zodResolver } from "@hookform/resolvers/zod";

import { LoaderCircle, Eye, EyeOff } from "lucide-react";

import Link from "next/link";

import { useState } from "react";

export default function Login() {
  // userouter returns an object with the functions we can use to navigate between the pages

  const router = useRouter();

  // state refers to the whole store

  const login = useAuthStore((state) => state.login);

  // we destruct the functions and the properties from useform hook

  // const we use it to make a variable for each property we destruct it

  // setError is a function by it we can create an error and store errors

  // isSubmitting is a boolean value which tell us if the submitting process is doing now or no

  // loginFormData it tells react hook form the structure of the data that must be sent from the form

  // resolver is a property we send it to useform to connect react hook form with zod according to the loginSchema

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // error is a variable to save any informations about the error in it

  //console.error the error will be displayed in the console only

  // split will divide the email to two pieces in an aarray brfore and after the @

  // we use async to simualte that this function will take time to be rendered

  // setTimeOut donn;t return a promise and we cant use await without a promise so we cretae a promise with new keyword

  // resolve is a built in function which tells the promise that the function is done and to continue the rest of the code

  const onSubmit = async (formData: loginFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      const result = login({
        email: formData.email,
        name: formData.email.split("@")[0],
      });

      if (!result.success) {
        // setError takes the error name and the error message

        setError("root", {
          message: result.error,
        });
        // to stop the function here
        return;
      }
      router.push("/");
    } catch (error) {
      console.error("invalid login", error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

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

      <div className="w-xl flex flex-col pt-10 px-10 bg-white rounded-3xl gap-5">
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

        <form
          className="flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <label
            // htmlfor and id to connect the label with the input as when the user clicksa on the label the cursor will be displayed inside the input

            htmlFor="email"
            className="font-outfit font-normal text-[#17172F] text-sm"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            // ... to can spread the properties that will be returned from the register function (onchange , onblur , name , ref)

            {...register("email")}
            className="w-full font-outfit p-3 rounded-lg bg-[#F7F7FB] border border-[#E9EAF5] text-[#A0A0B4] text-xs outline-none my-3"
            placeholder="your.email@expensepulse.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
          <label
            htmlFor="password"
            className="font-outfit font-normal text-[#17172F] text-sm mt-3"
          >
            Password
          </label>
          <div className="relative w-full">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="w-full font-outfit p-3 rounded-lg bg-[#F7F7FB] border border-[#E9EAF5] text-[#A0A0B4] text-sm outline-none my-3"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              // for the screen readers

              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#85859B] cursor-pointer"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>

          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
          <button
            className="w-full p-3 rounded-lg bg-[#FF9815] font-bold text-md text-white mt-5 mb-1 cursor-pointer flex justify-center"
            // when we click on it this is the event , so the onsumbit will be rendered

            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <LoaderCircle className="w-5 h-5 animate-spin" />
            ) : (
              "login"
            )}
          </button>

          {errors.root && (
            <p className="text-red-500 text-xs text-center">
              {errors.root.message}
            </p>
          )}

          <div className="flex flex-col items-center gap-3 my-4">
            <div className="w-full h-[1px] bg-[#C4C0C0]"></div>
            <Link
              className="font-outfit font-bold text-md text-[#D47B06] cursor-pointer"
              href={"/signup"}
            >
              New here?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
