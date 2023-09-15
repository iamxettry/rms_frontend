'use client'
import getNotCompletedOrder from "@/lib/getNotcompletedOrder";
import getOrderList from "@/lib/getOrderList";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ImArrowLeft2 } from "react-icons/im";

const Order = () => {
  
  const [order, setOrder] = useState([]);
  const userId = Cookies.get('userId');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orderData = await getNotCompletedOrder(parseInt(userId));
        setOrder(orderData.result);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchData();
  }, [userId]);

 

  return (
    <>
    <div className="lg:w-4/5 mx-auto">

    <header className="flex justify-between items-center text-gray-700 dark:text-white">
          <Link
            href={"/dashboard/user/"}
            className="flex gap-2 items-center py-2 my-2 cursor-pointer"
          >
            <ImArrowLeft2 />
            <h1 className="font-bold ">Back</h1>
          </Link>
          <Link
            href={`/dashboard/user/myorder/history`}
            className="flex gap-2 items-center py-2 my-2 cursor-pointer mr-4 md:mr-10"
          >
            <h1 className="font-bold ">View History</h1>
          </Link>
        </header>
      <div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
              <tr>
               
                <th scope="col" className="text-[10px] xs:text-[12px] px-1 md:px-6 py-3">
                  Food Name
                </th>
                <th scope="col" className="text-[10px] xs:text-[12px] px-1 md:px-6 py-3">
                  quantity
                </th>
                <th scope="col" className="text-[10px] xs:text-[12px] px-1 md:px-6 py-3 md:hidden">
                   Price
                </th>
                <th scope="col" className="hidden md:flex text-[10px] xs:text-[12px] px-1 md:px-6 py-3">
                  Total price
                </th>
                <th scope="col" className="text-[10px] xs:text-[12px] px-1 md:px-6 py-3">
                  Completed
                </th>
               
             
              </tr>
            </thead>
            <tbody>
              {order.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                
                  <td className="text-[10px] px-2 xs:text-[14px] md:px-6 py-3 capitalize">{item.menu_item.name}</td>
                  <td className="text-[10px] px-2 xs:text-[14px] md:px-6 py-3">{item.quantity}</td>
                  <td className="text-[10px] px-2 xs:text-[14px] md:px-6 py-3">{item.totalPrice}</td>
                  <td className="text-[10px] px-2 xs:text-[14px] md:px-6 py-3">
                    {
                      item?.completed?"yes":"no"
                    }
                  </td>
                  {/* <td className="px-6 py-4">{item.grand_total}</td> */}
                  
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>

    </>
  );
};

export default Order;
