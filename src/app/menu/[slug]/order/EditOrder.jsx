"use client";

import { useState } from "react";
import {  FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const EditOrder = ({ data,updateOrder }) => {
  const initialValue = data.quantity || 1; 
  const [value, setValue] = useState(initialValue);
  const handleSumbit = async (e) => {
    e.preventDefault();
    await updateOrder(data.id,{u_id:data.u_id,f_id:data.f_id, quantity: value })
  };
  return (
    <div className="absolute  left-52 top-12 rounded-md shadow-md dark:bg-gray-700 dark:text-gray-400 bg-gray-300 z-40 w-80">
      <div className="my-5 px-4">
        {/* <h1 className="flex justify-end items-center"><span className="mr-4 dark:bg-white dark:text-black font-bold flex items-center justify-center p-2 cursor-pointer rounded-full" ><ImCross/></span></h1> */}
        <form onSubmit={handleSumbit} className="flex gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="rounded-md bg-white bg-opacity-60 text-black px-2 py-2 w-24 outline-none"
            />
          </div>
          <div className="flex justify-end items-center flex-col">
            <div
              
              className=" mr-2 flex  items-center justify-start gap-3  rounded-md py-2 px-3 border-2"
            >
              <button type="submit" className="flex items-center justify-center gap-3">
                <FaPlus />
                <span>save</span>
              </button>
            </div>
          </div>
        </form>
        <p>Current Quantity: {data.quantity}</p>
      </div>
    </div>
  );
};

export default EditOrder;
