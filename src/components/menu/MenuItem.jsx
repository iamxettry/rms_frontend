"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPlus, FaHeart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import BackLight from "../backLight/Backlight";
import getMenu from "@/lib/getMenu";
const MenuItem = () => {
  const [category, setCategory] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const item = await getMenu(5);
         
          setCategory(item)
  
      };
      fetchData();
    }, []);
  return (
    <>
      <div className="flex  items-center justify-center lg:flex-row bg-slate-200 m-2 px-4 py-4 gap-2 rounded-lg relative dark:bg-slate-200 dark:bg-opacity-10  dark:text-white   flex-wrap w-full">
      {category?.map((item) => (
                <div
                  className="flex flex-col items-center  bg-white border-gray-200 m-2 px-4 py-4 gap-2 rounded-lg relative dark:bg-slate-200 dark:bg-opacity-10  dark:text-white/70  shadow-lg dark:shadow-sm shadow-slate-500 dark:shadow-yellow-50  border dark:border-gray-600 dark:hover:border-orange-500  hover:border-orange-500 lg:flex-wrap lg:flex-row  lg:w-48"
                  key={item.id}
                >
                  {/* {
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
             } */}
                  <Link
                    href={`/menu/${item.id}`}
                    className="w-full flex flex-col  justify-around items-center"
                  >
                    {/* <BackLight style=" h-20 w-20 top-12 left-10 blur-[50px]  bg-gradient-to-r from-green-500 to-white" /> */}

                    <Image
                      src={item.img}
                      priority
                      height={300}
                      width={300}
                      className=" rounded-lg  "
                      alt={item.name}
                    />
                    <h1 className="capitalize text-start w-full text-black text-opacity-80  text-lg my-2 dark:text-white">
                      <b>{item.name}</b>
                    </h1>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-black text-opacity-80 dark:text-white text-sm xs:text-base">
                        <b>Rs {item.price}</b>
                      </p>

                      <p className="p-1 xs:p-2 rounded-full  text-white bg-orange-500 ">
                        <FaPlus />
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
      </div>
    </>
  );
};

export default MenuItem;
