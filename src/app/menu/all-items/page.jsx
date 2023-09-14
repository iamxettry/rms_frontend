"use client";

import getMenu from "@/lib/getMenu";
import Image from "next/image";
// import React, { useState } from "react";
import { FaPlus, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ImArrowLeft2 } from "react-icons/im";
const MenuList = () => {
  // const [favourite, setfavourite] = useState(false);
  const [menuData, setMenuData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const data = await getMenu();

      setMenuData(data);
  
    };
    fetchData();
  }, [menuData]);

  return (
    <>
      {/* menu nav category */}

      {/* menu list */}

      <div className="my-3">
        <div className="px-4 w-full py-1  bg-white dark:bg-slate-800 dark:bg-opacity-50  rounded-md flex justify-between items-center ">
          <Link
            href={"/menu"}
            className="flex gap-2 items-center py-2 my-2 cursor-pointer"
          >
            <ImArrowLeft2 />
            <h1 className="font-bold ">Back</h1>
          </Link>
          <Link href={"/menu/veg"} className="hover:text-orange-500 font-bold">
            Veg Menu
          </Link>
          <Link
            href={"/menu/non-veg"}
            className="hover:text-orange-500 font-bold"
          >
            Non-veg Menu
          </Link>
          <h1 className="font-bold text-orange-500">View All Menu </h1>

        </div>
        <div className="grid grid-cols-2 rounded-lg md:grid-cols-3 lg:grid-cols-4">
          {/* map the items */}
          {menuData?.map((item) => (
            <div
              className="flex flex-col items-center  bg-white m-2 px-4 py-4 gap-2 rounded-lg relative dark:bg-slate-200 dark:bg-opacity-10  dark:text-white shadow-lg dark:shadow-sm shadow-slate-500 dark:shadow-yellow-50   "
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
                className="w-full flex flex-col items-center"
              >
                {/* <BackLight style=" h-20 w-20 top-12 left-10 blur-[50px]  bg-gradient-to-r from-green-500 to-white" /> */}

                <Image
                  src={item.img}
                  priority
                  height={200}
                  width={300}
                  className=" rounded-lg"
                  alt="salad"
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
      </div>
    </>
  );
};

export default MenuList;
