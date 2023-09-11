"use client";
import getOrderList from "@/lib/getOrderList";
import { setUser } from "@/redux/features/authSlice";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ImCheckmark, ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";

const Orders =  () => {
  const [order, setOrder] = useState(null);
  const dispatch= useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const orderData = await getOrderList();
        setOrder(orderData);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchData();
  }, []);
    // Group orders by user
    const ordersByUser = {};
    if (order) {
      order.result.forEach((order) => {
        const userId = order.account.id;
        if (!ordersByUser[userId]) {
          ordersByUser[userId] = [];
        }
        ordersByUser[userId].push(order);
      });
    }

     // Function to split date and time
  const splitDateAndTime = (dateTimeString) => {
    const [datePart, timePart] = dateTimeString.split("T");
    return { datePart, timePart };
  };
  const extractHourMinute = (timePart) => {
    const [hour, minute] = timePart.split(":").slice(0, 2); // Take only hour and minute
    return `${hour}:${minute}`;
  };
 
  return (
    <>
      <main className="flex flex-wrap px-2">
        {order ? (
          <>
            <div className="relative  shadow-md sm:rounded-lg z-10 w-[96%] md:w-[90%] lg:w-4/5 mx-auto mt-4">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                  <th scope="col" className="px-4 py-3 ">
                      User
                    </th>
                    <th scope="col" className="px-4 py-3 text-center">
                      Order_Date
                    </th>
                    <th scope="col" className="px-4 py-3 text-center">
                      Completed
                    </th>

                    <th scope="col" className="px-4 py-3 text-center ">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                {Object.keys(ordersByUser).map((userId) => (
                ordersByUser[userId].map((order, index) => (
                  <tr
                    key={order.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    {index === 0 ? (
                      <td scope="row" rowSpan={ordersByUser[userId].length} className="px-4 py-3 capitalize ">
                        <Link
                        href={`/dashboard/admin/orders/${order.account.id}`}
                        className={"font-bold hover:underline"}
                      >
                        {order.account.username}
                      </Link>
                        
                      </td>
                    ) : null}
                    {index === 0 ? (
                      <td scope="row" rowSpan={ordersByUser[userId].length} className="px-4 py-3 text-center">
                         {splitDateAndTime(order.order_date).datePart}
                        <br />
                        {extractHourMinute(splitDateAndTime(order.order_date).timePart)}
                      </td>
                    ) : null}
                    {index === 0 ? (
                      <td scope="row" rowSpan={ordersByUser[userId].length} className="px-4 py-3 flex justify-center items-center ">
                        {
                          ordersByUser[userId].every((order) => order.completed) ? (
                            <ImCheckmark className="text-green-500" />
                          ):<ImCross className="text-red-600"/>
                        }
                      </td>
                    ) : null}
                   
                    {index === 0 ? (
                      <td className="px-4 py-4 ">
                          <Link
                          href={`/dashboard/admin/orders/${order.account.id}`}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          // onClick={()=>dispatch(setUser(order.account.username))}
                          onClick={()=>Cookies.set('user',order.account.username)}
                        >
                          View
                        </Link>
                      
                        
                      
                    </td>
                    ) : null}
                    
                    
                  </tr>
                ))
              ))}
                  
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p>No order list</p>
        )}
      </main>
    </>
  );
};

export default Orders;
