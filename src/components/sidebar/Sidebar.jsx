"use client";
import React, { useState } from "react";

import { HiBars3 } from "react-icons/hi2";
import List from "./List";
import { ImLeaf } from "react-icons/im";
import Link from "next/link";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className={`${
          toggle ? "md:w-[250px] absolute left-0 md:relative" : " md:w-20"
        } bg-white dark:bg-black border-r border-opacity-70  min-h-screen flex flex-col md:px-2 py-5 `}
      >
        <div className="w-full flex justify-center items-center ">
          <div className="flex justify-between items-center w-full text-black">
            <div className={`${toggle ? "flex" : "hidden"} justify-center  items-center flex-1`}>
              <Link
                href={"/"}
                className="flex items-center py-4 text-2xl font-semibold text-gray-900 dark:text-white "
              >
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  B<span className="text-orange-500">D.</span>
                </span>
                <ImLeaf className="text-green-500" />
              </Link>
            </div>
            <div
             
              className={`${
                toggle ? "text-2xl" : "text-3xl"
              } w-full  dark:text-white cursor-pointer flex-1`}
            >
              <HiBars3
                onClick={() => setToggle((prev) => !prev)}
                className="w-8 mx-auto "
              />
            </div>
          </div>
        </div>
        <div className="w-full flex-1 mt-5 px-2">
          <List toggle={toggle} setToggle={setToggle} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
