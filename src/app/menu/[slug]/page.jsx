import React from "react";
import Image from "next/image";

import { FaStar, FaRegClock } from "react-icons/fa";
import { BiDotsVerticalRounded, BiShoppingBag } from "react-icons/bi";
import { MdExpandLess } from "react-icons/md";
import { BsFire } from "react-icons/bs";

import Link from "next/link";
import IncDec from "@/components/menu/IncDec";
import BackLight from "@/components/backLight/Backlight";
import getItem from "@/lib/getItem";
import CartItem from "./CartItem";


const page =async ({ params }) => {
  const {slug}=params
  const data=await getItem(slug)
 
  return (
    <>
    <div className="h-[80vh] md:hidden">

    </div>
      <div className="absolute z-40 top-0 left-0 light_bg   py-8 dark:bg-black  lg:flex md:relative lg:gap-5">
        <div className="relative flex flex-col items-center justify-normal gap-5 lg:flex-1 ">
          <BackLight style=" h-40 w-40 top-14 left-5 blur-[100px] bg-gradient-to-r from-green-500 to-white z-0" />
          <BackLight style="h-20 w-20 md:h-24 md:w-24 top-96 right-16 bg-gradient-to-l from-green-500 to-white z-0 blur-[30px] md:blur-[50px] md:top-10 md:blur-[60px] " />
          <BackLight style="h-20 w-20 bottom-4 left-20 bg-gradient-to-r from-green-500 to-white blur-[40px] md:left-40 " />
          {/* top icons */}
          <div className="flex flex-col items-center justify-normal gap-5 md:flex-row ">
            <Link href={"/menu"} className="">
              <MdExpandLess className="absolute -rotate-90 text-4xl  left-0 md:-left-3 md:-top-2 top-1 z-20" />
            </Link>
            <BiDotsVerticalRounded className="absolute right-0 text-3xl top-1 md:hidden z-20" />
            {/* left section  */}
            <div className=" flex flex-col items-center  relative z-10 top-5">
              {/* Image section */}
              <Image
                src={data.img}
                priority
                height={300}
                width={400}
                className="z-20 relative   w-[250px] h-[250px] xs:h-auto  xs:w-[350px] md:w-[200px] lg:w-[250px] rounded-md"
                alt="salad"
              />

              {/* Increment Decrement */}
              <div className="flex flex-col items-center gap-3 z-20 relative mt-2 ">
                <p className="flex gap-2 items-center justify-center my-2 ">
                  <span className="h-2 w-2 bg-black rounded-full opacity-50  dark:bg-white"></span>
                  <span className="h-2 w-8 bg-black rounded-full opacity-75 dark:opacity-80 dark:bg-white"></span>
                  <span className="h-2 w-2 bg-black rounded-full opacity-50 dark:bg-white"></span>
                </p>
                <IncDec data={data} />
              </div>
            </div>

            {/* Details : right section */}
            <div className="flex flex-col gap-5 flex-1 ">
              {/* Title */}
              <div className="flex justify-between w-full items-center px-6 text-3xl dark:text-white">
                <h1 className="md:text-2xl capitalize">
                  <b>{data.name}</b>
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
              {/* description */}
              <p className="px-6 text-black text-opacity-60  dark:text-white">
                Fresh seafood salad with lettuce green mix,chhery tomatoes,herbs
                and alive oil,lemon dressing food...
                <a href="#" className="text-orange-500 font-bold">
                  Read More
                </a>
              </p>
              <div className="flex w-full justify-between px-6 items-center my-4">
                <p className="flex gap-4 justify-start items-center">
                  <i className="text-orange-500">
                    <BsFire />
                  </i>
                  <span className="font-bold">{data.calorie} Cal</span>
                </p>
                <p className="flex gap-4 justify-start items-center">
                  <i className="text-orange-500">
                    <FaRegClock />
                  </i>
                  <span className="font-bold">8-10 Min</span>
                </p>
              </div>
            </div>
          </div>
          {/* Bottom card  */}
          <div className="flex w-full justify-end px-4 items-center">
            {/* <h1 className="flex flex-col md:flex-row bg-slate-200 dark:bg-opacity-10  dark:text-white p-2  rounded-md">
              <span className="font-bold text-sm xs:text-xl w-32 text-black text-opacity-60 text-center dark:text-white ">
                Total Price
              </span>
              <span className="font-bold text-sm xs:text-xl text-center">
                Rs {data.price}
              </span>
            </h1> */}
            <CartItem slug={slug}/>
          </div>
          <div className="hidden">Add later</div>
        </div>
        <div className="hidden lg:flex flex-[0.3] xl:flex-[0.5] lg:w-60">
          <div className="flex flex-col flex-wrap items-center justify-center xl:grid xl:grid-cols-2 border-l border-black/70 dark:border-white ">
            {/* <MenuItem title="Seafood Salad" />
            <MenuItem title="Momo" />
            <MenuItem title="Avocada salad" />
            <MenuItem title="Fish " /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
