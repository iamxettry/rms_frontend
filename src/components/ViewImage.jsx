"use client";
import Image from "next/image";
import React, { useState } from "react";

const ViewImage = ({ link, name }) => {
  const [View, setView] = useState(false);
  return (
    <>
      <Image
        src={link}
        alt={name}
        priority
        height={300}
        width={300}
        className={`z-20 relative w-[200px] h-[200px]    xs:h-auto  xs:w-[300px] md:w-[200px] lg:w-[230px] rounded-md cursor-pointer md:hidden`}
        title="View Image"
      />
      <Image
        src={link}
        alt={name}
        priority
        height={300}
        width={300}
        className={`z-20 relative w-[200px] h-[200px] xs:h-auto  xs:w-[300px] md:w-[200px] lg:w-[230px] rounded-md cursor-pointer hidden md:flex ${
          View ? "blur-lg" : ""
        }`}
        title="View Image"
        onClick={() => setView(true)}
      />
      {View ? (
        <div className=" hidden md:flex absolute z-50 top-0  justify-center items-center bg-black bg-opacity-70  w-[80vw] left-0 py-2">
          <div
            className="absolute w-8 h-8 bg-orange-500 rounded-full flex justify-center items-center top-5 right-10 text-white text-xl font-bold cursor-pointer"
            title="Close"
            onClick={() => setView(false)}
          >
            X
          </div>
          <div className=" flex justify-center items-center h-full ">
            <Image
              src={link}
              alt={name}
              priority
              height={800}
              width={800}
              className="z-20 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] "
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ViewImage;
