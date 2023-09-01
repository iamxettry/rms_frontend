import Image from "next/image";
import React from "react";
import { menu } from "../../../public/assets";
import { FaPlus } from "react-icons/fa";
import { Btn } from "@/utils/Btn";

const CreateMenu = () => {
  return (
    <>
      <div className="w-72 my-4 rounded-md bg-white border shadow-md hover:shadow-lg hover:scale-105 transition-all ease-in">
        <Image src={menu} height="auto" width="auto" priority alt="hero" />
        <h1 className="text-start font-bold py-2">Create a Menu</h1>

        <div className="flex justify-end items-center mr-2">
    
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-500 to-pink-500 group-hover:from-orange-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-orange-800">

            <span className="relative px-3 py-2.5  bg-white dark:bg-black rounded-md group-hover:bg-opacity-0 flex items-center gap-2">
          <FaPlus />
              <Btn title="Create" path="menu/add-item" available={true} />
              {/* <span>Create</span> */}
            </span>
          </button>
        
        </div>
      </div>
    </>
  );
};

export default CreateMenu;
