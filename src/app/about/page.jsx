import Image from "next/image";
import React from "react";
import { hero10bgremoved } from "../../../public/assets";
import DashLineCenter from "@/components/dashedlined/DashLineCenter";
import BackLight from "@/components/backLight/Backlight";
import DashLineRight from "@/components/dashedlined/DashLineRight";

const About = () => {
  return (
    <>
      <div>
        <div className="z-10 py-10 relative after:absolute after:z-0  after:contents-[*]  md:after:w-[600px] after:h-96 md:after:bg-hero-14 after:bg-contain after:bg-no-repeat md:after:blur-sm md:after:opacity-50 lg:after:blur-none after:top-0 after:right-0 ">
          <div className="flex  justify-center items-center flex-col h-48 gap-10 z-40 relative ">
            <h1 className="text-4xl md:text-6xl font-bold">About us</h1>
            <p className="text-lg text-black/60 dark:text-white/70">
              Experience the Magic of Bubbles at BubbleDubble.
            </p>
          </div>
          <DashLineCenter />

          <BackLight
            style={
              "w-32 md:w-40 h-32 md:h-40 bg-gradient-to-r from-orange-500 to-green-700 left-32 top-20 blur-[60px] md:blur-[100px] "
            }
          />
          <DashLineRight />
        </div>
        <div className="mt-32">
          <h1 className="uppercase md:text-6xl text-2xl">Let&apos;s conntect with us</h1>
          <form action="" className="md:w-4/5 mx-auto  flex gap-5 items-center my-5">
            <div className="">
            <input type="email" name="email" id="email" placeholder="Enter your email" className="rounded-full   border-2 border-black/50 dark:border-white py-2 w-48 md:py-4 md:px-6 px-2 "/>
            
            </div>
            <button type="submit"
            className="md:mr-20 mr-6 flex  items-center justify-start  md:gap-3  rounded-lg p-0.5  bg-gradient-to-br from-orange-500 to-pink-500 "
            >
              <span  className="flex items-center justify-center gap-1 md:gap-3 p-1 md:px-5 md:py-2.5 dark:bg-black rounded-md bg-white">
                  Contact us
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
