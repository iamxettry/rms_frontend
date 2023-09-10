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
      <div>
        <h1>my Orders</h1>
      </div>
      <div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
              <tr>
               
                <th scope="col" className="px-6 py-3">
                  Food Name
                </th>
                <th scope="col" className="px-6 py-3">
                  quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total price
                </th>
                <th scope="col" className="px-6 py-3">
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
                
                  <td className="px-6 py-4">{item.menu_item.name}</td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4">{item.totalPrice}</td>
                  <td className="px-6 py-4">
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
    </>
  );
};

export default Order;
