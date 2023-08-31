import React from "react";
import { Btn } from "@/utils/Btn";
import { hero10bgremoved } from "../../public/assets";
import Image from "next/image";

const ExploreMenu = () => {
  return (
    <>
      <div className="sm:w-[90%] md:w-full mx-auto">
        <div className="md:flex items-center justify-between">
          {/* image (left) section */}
          <div className="flex-1 w-full p-2">
            <Image src={hero10bgremoved} priority alt="Burger" height="auto" width="auto" />
          </div>

          {/* desc (right)  section*/}
          <div className="flex-1">
            <div className="p-5 text-center">
              <div className="py-5 ">
                <h1 className="py-2 text-4xl font-bold text-black text-opacity-80 dark:text-white" >Welcome</h1>
                <h2 className="w-12 h-[3px] inline-block  bg-black bg-opacity-80 dark:bg-white "></h2>
              </div>
              <div className=" w-full py-2">
                <h2 className=" uppercase font-bold text-black text-opacity-50 dark:text-gray-200">Quality is at heart of everything we do</h2>
              </div>
              <div className="w-full py-3">
                <p className="text-black text-opacity-50  dark:text-gray-400">Our daily changing menu represents the best of what our local markets have to offer. Our passion for sourcing fresh ingredients from farmers and suppliers we know, combining with traditional flavors and rewriting familiar recipes into exceptional cuisine is our mission and greatest joy.</p>
              </div>
              <div className="w-full py-3">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-500 to-pink-500 group-hover:from-orange-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-orange-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0">

                <Btn title="Explore Menu" path="menu/" available={true} />
                  
                </span>
              </button>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreMenu;
