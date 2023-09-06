"use client";
import Cookies from "js-cookie";
import Link from "next/link";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { toast } from "react-toastify";

const CartItem = ({ slug }) => {
  const count = Cookies.get("count");
  // const { slug } = params;
  const userId = Cookies.get("user");
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(22);
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/order/cart/`, {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({quantity:count,u_id:userId,f_id:slug}),
      });
       if (res.ok) {
        console.log("successful");
       }
    } catch (error) {
        toast.error("connection Failed!!")
    }
  };
  return (
    <>
      <div className="flex justify-end items-center  " onClick={handleClick} >
        <Link
          href={`/menu/${slug}/order`}
          className="bg-orange-500 py-4 w-48 h-full rounded-2xl flex justify-around items-center text-white font-bold"
          
        >
          <i className="text-xl sm:text-4xl">
            <BiShoppingBag />
          </i>
          <button className="texbase md:text-xl" >
            Add To Cart
          </button>
        </Link>
      </div>
    </>
  );
};

export default CartItem;
