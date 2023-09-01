'use client'

import Image from "next/image";
import React from "react";
import { hero10bgremoved } from "../../../../../../public/assets";
import { FaPlus } from "react-icons/fa";
// import { FaPlus } from 'react-icons/fa'

const AddItem = () => {

    
  const handleSumbit=(e)=>{
    e.preventDefault()
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('name'),
      category: data.get('category'),
      price: data.get('price'),
      veg: data.get('veg'),
      image: data.get('image'),
      available: data.get('available'),
      calorie: data.get('calorie'),
    }
    console.log(actualData);
  }
  return (
    <>
      <div className="w-full flex flex-col gap-5">

        <div className="md:flex justify-between items-center gap-4">
          <form action="" className="  py-5 rounded-md flex-1 flex flex-col justify-center items-start " onSubmit={handleSumbit}>
            <div className="flex text-black/80 gap-2 my-3 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-start items-center">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" className="rounded-md focus:outline-none px-3 bg-transparent w-full" placeholder="Enter the item name" />
            </div>
            <div className="flex text-black/80 gap-2 my-3 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-start items-center">
              <label htmlFor="category">Category</label>
              <input type="text" id="category" name="category"  className="rounded-md focus:outline-none px-3 bg-transparent w-full" placeholder="Enter the item Category" />
            </div>
            <div className="flex text-black/80 gap-2 my-3 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-start items-center">
              <label htmlFor="price">Price</label>
              <input type="number" id="price" name="price" className="rounded-md focus:outline-none px-3 bg-transparent  w-full" placeholder="Enter the product price(unit)" />
            </div>
            <div className="flex text-black/80  my-3 gap-2 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-start items-center ">
              <label htmlFor="veg">veg</label>

              <input type="radio" id="veg" name="veg" className="ml-20" />
              <span className="text-xs">(Check the box if veg)</span>

            </div>
            <div className="flex text-black/80 gap-2 my-3 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-between items-center">
              <label htmlFor="image">Upload Image</label>
              <input type="file" name="image" className="" />
            </div>
            <div className="flex text-black/80 gap-2 my-3 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-start items-center">
              <label htmlFor="available">Available</label>
              <input type="checkbox" name="available" className="ml-20 " />
              <span className="text-xs">(Check the box if available)</span>

            </div>
            <div className="flex text-black/80 gap-2 my-3 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-start items-center">
              <label htmlFor="calorie">Calorie</label>
              <input type="number" name="calorie"  className="rounded-md focus:outline-none px-3 bg-transparent w-full" placeholder="Enter the item kalorie" />
            </div>

            <div className="flex justify-end items-center w-full">
                <button type="submit" className="mr-20 flex  items-center justify-start gap-3 border-2 rounded-md py-2 px-3 border-orange-500">
                    <FaPlus/>
                    <span>Add Item</span>
                </button>
            </div>
          </form>
          <div className="hidden md:flex-1">
            <Image src={hero10bgremoved} height="auto" width="auto" priority alt="food item" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItem;
