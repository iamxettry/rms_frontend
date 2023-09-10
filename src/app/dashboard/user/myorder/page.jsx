'use client'
import getOrderList from "@/lib/getOrderList";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const Order = () => {
  
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = Cookies.get('userId');
        const orderData = await getOrderList();
        // console.log('all data',orderData);
        const filteredData = orderData.result.filter(item => item.account.id === parseInt(userId));
        // console.log('filtered data',filteredData);
        setOrder(filteredData);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="lg:w-4/5 mx-auto">

      <div className="w-full flex justify-start items-center py-5">
        <h1 className="ml-4 text-4xl ">My Orders</h1>
      </div>
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
