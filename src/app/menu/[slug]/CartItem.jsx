"use client";
import { selectCount } from "@/redux/features/orderSlice";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const CartItem = ({ slug }) => {
  // const count = Cookies.get("count");
  let count= useSelector(selectCount)
  // const { slug } = params;
  const userId = Cookies.get("userId");

  const router= useRouter()
  const handleClick = async (e) => {
    e.preventDefault();
    let verify=Cookies.get('loggedin')
    console.log(verify);
    if (!verify) {
      router.push('/auth/login')
    }
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/order/cart/`, {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({quantity:count,u_id:userId,f_id:slug}),
      });
       if (res.ok) {
        const data=await res.json()
        console.log("successful",data);
       }else{
        toast.error('not logged in')
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
