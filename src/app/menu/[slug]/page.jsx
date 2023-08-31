import React from "react";
import { hero } from "../../../../public/assets";
import Image from "next/image";

import { FaStar, FaRegClock } from "react-icons/fa";
import { BiDotsVerticalRounded, BiShoppingBag } from "react-icons/bi";
import { MdExpandLess } from "react-icons/md";
import { BsFire } from "react-icons/bs";

import Link from "next/link";
import IncDec from "@/components/menu/IncDec";
import BackLingt3 from "@/components/backLight/Backlight";

const page = ({params}) => {
  return (
    <>
      <div className="absolute z-50 top-0 left-0 bg-green-50 px-4 py-8 dark:bg-black">
        <div className="relative flex flex-col items-center justify-normal gap-5">
          {/* top icons */}
          <Link href={"/menu"}>
            <MdExpandLess className="absolute -rotate-90 text-4xl  left-0" />
          </Link>
          <BiDotsVerticalRounded className="absolute right-0 text-3xl " />
          <BackLingt3 style=" h-48 w-48 top-28 left-10 blur-[80px] bg-gradient-to-r from-green-500 to-white" />
          <Image
            src={hero}
            priority
            height={100}
            width={350}
            className="z-20"
            alt="salad"
          />
          <BackLingt3 style="h-32 w-32 top-96 right-20 bg-gradient-to-r from-green-500 to-white blur-[50px]" />
          <div className="flex flex-col gap-3 z-20  ">
            <p className="flex gap-2 items-center justify-center my-2">
              <span className="h-2 w-2 bg-black rounded-full opacity-50  dark:bg-white"></span>
              <span className="h-2 w-8 bg-black rounded-full opacity-75 dark:opacity-80 dark:bg-white"></span>
              <span className="h-2 w-2 bg-black rounded-full opacity-50 dark:bg-white"></span>
            </p>
            <IncDec/>
          </div>
          <div className="flex justify-between w-full items-center px-6 text-3xl dark:text-white">
            <h1 className="">
              <b>Seafood Salad</b>
            </h1>
            <p className="flex gap-2 items-center justify-center text-2xl">
              <i className="text-orange-500">
                <FaStar />
              </i>
              <span className="text-xl">
                <b>4.5</b>
              </span>
            </p>
          </div>
          <p className="px-6 text-black text-opacity-60  dark:text-white">
            Fresh seafood salad with lettuce green mix,chhery tomatoes,herbs and
            alive oil,lemon dressing food...
            <a href="#" className="text-orange-500 font-bold">
              Read More
            </a>
          </p>
          <div className="flex w-full justify-between px-6 items-center my-4">
            <p className="flex gap-4 justify-start items-center">
              <i className="text-orange-500">
                <BsFire />
              </i>
              <span className="font-bold">100 kal</span>
            </p>
            <p className="flex gap-4 justify-start items-center">
              <i className="text-orange-500">
                <FaRegClock />
              </i>
              <span className="font-bold">8-10 Min</span>
            </p>
          </div>
          <BackLingt3 style="h-20 w-20 bottom-4 left-20 bg-gradient-to-r from-green-500 to-white blur-[30px]" />
          <div className="flex w-full justify-between px-4 ">
            <h1 className="flex flex-col ">
              <span className="font-bold text-sm xs:text-xl w-32 text-black text-opacity-60 text-center dark:text-white">
                Total Price
              </span>
              <span className="font-bold text-sm xs:text-xl text-center">$12.00</span>
            </h1>
            <div className="flex justify-end items-center  ">
              <button className="bg-orange-500  w-48 h-full rounded-2xl flex justify-around items-center text-white font-bold">
                <i className="text-xl sm:text-4xl">
                  <BiShoppingBag />
                </i>
                <span className="texbase md:text-xl">Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
