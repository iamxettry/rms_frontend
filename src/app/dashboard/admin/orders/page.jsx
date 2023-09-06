"use client";
import getOrderList from "@/lib/getOrderList";
import React, { useEffect, useState } from "react";

const Orders = async () => {
  const [order, setOrder] = useState(null);
  const [value, setValue] = useState(false);

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
  console.log(order);

  const handleCheckboxChange = (e, orderId) => {
    const { checked } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      result: prevOrder.result.map((orderItem) =>
        orderItem.id === orderId
          ? { ...orderItem, completed: checked }
          : orderItem
      ),
    }));
  };
  const handleSubmit = async (e, orderId) => {
    e.preventDefault();
    const orderItem = order.result.find((item) => item.id === orderId);
 
    const requestData = {
      completed: orderItem.completed,
    };
    const res = await fetch(
      `http://127.0.0.1:8000/api/order/orders/${orderId}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(requestData),
      }
    );

    console.log(res);
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
                    <th scope="col" className="px-4 py-3">
                      Product name
                    </th>

                    <th scope="col" className="px-4 py-3 ">
                      User
                    </th>
                    <th scope="col" className="px-4 py-3 ">
                      Price (unit)
                    </th>
                    <th scope="col" className=" px-4 py-3">
                      quantity
                    </th>
                    <th scope="col" className=" px-4 py-3">
                      Completed
                    </th>

                    <th scope="col" className="px-4 py-3 ">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {order.result.map((order) => (
                    <tr
                      key={order.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td scope="row" className="px-4 py-4 ">
                        {order.menu_item.name}
                      </td>
                      <td scope="row">{order.account.username}</td>
                      <td className="px-4 py-4 ">{order.menu_item.price}</td>
                      <td className="px-4 py-4 ">{order.quantity}</td>
                      <td className="px-4 py-4 ">No</td>

                      <td className="px-4 py-4 text-right">
                        <form onSubmit={(e) => handleSubmit(e, order.id)}>
                          <label htmlFor={`completed-${order.id}`}>
                            <input
                              type="checkbox"
                              id={`completed-${order.id}`}
                              name={`completed-${order.id}`}
                              // value={value}
                              onChange={(e) =>
                                handleCheckboxChange(e, order.id)
                              }
                              checked={order.completed}
                            />
                          </label>
                          <button type="submit">Submit</button>
                        </form>
                        
                      </td>
                    </tr>
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
