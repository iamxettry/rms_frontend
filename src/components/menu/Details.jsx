import getItem from "@/lib/getItem";
import Image from "next/image";
import React from "react";
import { ImArrowLeft2, ImStarFull } from "react-icons/im";
import { hero1 } from "../../../public/assets";
import Link from "next/link";

const Details = async ({ id }) => {
  const data = await getItem(id);
  return (
    <div className="w-64 xs:w-72 mx-auto px-2 md:w-auto md:mx-2">
      <div className="flex gap-2 items-center py-2 my-2">
        <Link href={"/dashboard/admin/menu"}>
          <ImArrowLeft2 />
        </Link>
        <h1 className="font-bold">Datails</h1>
      </div>
      <div className="flex flex-col items-center gap-4 md:flex-row ">
        <Image
          src={data.img}
          height={200}
          width={300}
          priority
          alt="hero"
          className="rounded-md md:w-60"
        />
        <div className="w-60">
          <div className="w-full flex flex-col gap-5">
            <div className="flex items-center justify-between font-bold">
              <h1>{data.name}</h1>
              <h2 className="flex items-center gap-2">
                <ImStarFull />
                <span>4.5/5 </span>
              </h2>
            </div>
            <div className="flex items-center justify-between ">
              <h1>Category</h1>
              <h1>{data.category}</h1>
            </div>
            <div className="flex items-center justify-between ">
              <h1>Price</h1>
              <h1>{data.price}</h1>
            </div>
            <div className="flex items-center justify-between ">
              <h1>Available</h1>
              <h1>{data.available?"available":"not available"}</h1>
            </div>
            <div className="flex items-center justify-between ">
              <h1>Type</h1>
              <h1>{data.itemtype?"veg":"non veg"}</h1>
            </div>
            <div className="flex items-center justify-between ">
              <h1>Kkal</h1>
              <h1>{data.calorie}</h1>
            </div>
          </div>
          <div className="w-full flex flex-col mt-6 gap-3 ">
            <h1 className="font-bold">Rating sell item</h1>
            <div className="flex items-center justify-between ">
              <h1>Items Sold</h1>
              <h1>
                <b>1200</b>
              </h1>
            </div>
            <div className="flex items-center justify-between ">
              <h1>total price</h1>
              <h1>
                <b>$4200</b>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
