"use client";
import Image from "next/image";
import React, { useState } from "react";
import { hero } from "../../../public/assets";
import { FaPlus, FaHeart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import BackLight from "../backLight/Backlight";
const MenuItem = ({ item }) => {
  const [favourite, setfavourite] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center  bg-slate-200 m-2 px-4 py-4 gap-2 rounded-lg relative dark:bg-slate-200 dark:bg-opacity-10  dark:text-white  ">
        {
          // later change based through database
          favourite ? (
            <FaHeart
              className={`absolute right-2 top-2 text-red-700 cursor-pointer`}
              onClick={() => setfavourite(!favourite)}
            />
          ) : (
            <AiOutlineHeart
              className={`absolute right-2 top-2 cursor-pointer`}
              onClick={() => setfavourite(!favourite)}
            />
          )
        }
        <Link href={`/menu/${item.name}`} className="w-full flex flex-col items-center">
          <BackLight style=" h-20 w-20 top-12 left-10 blur-[50px]  bg-gradient-to-r from-green-500 to-white" />

          <Image
            src={item.img}
            priority
            height={200}
            width={300}
            className=""
            alt="salad"
          />
          <h1 className="text-start w-full text-black text-opacity-80  text-lg my-2 dark:text-white">
            <b>{item.name}</b>
          </h1>
          <div className="flex justify-between items-center w-full">
            <p className="text-black text-opacity-80 dark:text-white">
              <b>$5.98</b>
            </p>

            <p className="p-2 rounded-full  text-white bg-orange-500 ">
              <FaPlus />
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MenuItem;
