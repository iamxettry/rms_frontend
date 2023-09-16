"use client";
import getNotCompletedOrder from "@/lib/getNotcompletedOrder";
import { selectUser } from "@/redux/features/authSlice";
import { data } from "autoprefixer";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ImArrowLeft2, ImCheckmark, ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const OrderDetails = ({ params }) => {
  const [order, setOrder] = useState([]);
  const [date, setDate] = useState([]);
  const [time, setTime] = useState([]);
  const user = Cookies.get("user");

  const { id } = params;
  const router = useRouter();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const orderData = await getNotCompletedOrder(parseInt(id));
        setOrder(orderData.result);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchData();
  }, [id]);
  // console.log(user,date.datePart);

  const handleCheckboxChange = async (itemId) => {
    // Send PUT request to update completed status to true
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/order/orders/${itemId}/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ completed: true }), // Set completed to true
        }
      );

      if (res.ok) {
        // If the PUT request is successful, update the local state (order.completed)
        const updatedOrder = order.map((item) =>
          item.id === itemId ? { ...item, completed: true } : item
        );
        setOrder(updatedOrder);
      } else {
        const err = await res.json();
        toast.error(err);
      }
    } catch (error) {
      toast.error("Network fail!");
    }
  };

  const splitDateAndTime = (dateTimeString) => {
    const [datePart, timePart] = dateTimeString.split("T");
    return { datePart, timePart };
  };
  const extractHourMinute = (timePart) => {
    const [hour, minute] = timePart.split(":").slice(0, 2); // Take only hour and minute
    return `${hour}:${minute}`;
  };
  const handleSetAllItemsTrue = async () => {
    try {
      // Get the list of item IDs for the current user
      const itemIds = order.map((item) => item.id);

      // Send a batch PUT request to set completed to true for all items
      const requests = itemIds.map((itemId) =>
        fetch(`http://127.0.0.1:8000/api/order/orders/${itemId}/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ completed: true }),
        })
      );

      // Wait for all requests to complete
      const responses = await Promise.all(requests);

      // Check if all requests were successful
      if (responses.every((res) => res.ok)) {
        // Update the local state (order.completed) for all items

        toast.success("Order completed!");
        router.push("/dashboard/admin/orders");
      } else {
        // Handle errors if some requests failed
        const errorMessages = await Promise.all(
          responses.map(async (res) => {
            if (!res.ok) {
              const err = await res.json();
              return err.detail || "An error occurred.";
            }
          })
        );
        toast.error(errorMessages.join("\n"));
        console.log(errorMessages);
      }
    } catch (error) {
      toast.error("Network fail!");
    }
  };
  return (
    <>
      <main>
        <header className="flex justify-between items-center text-gray-700 dark:text-white">
          <Link
            href={"/dashboard/admin/orders"}
            className="flex gap-2 items-center py-2 my-2 cursor-pointer"
          >
            <ImArrowLeft2 />
            <h1 className="font-bold ">Back</h1>
          </Link>
          <Link
            href={`/dashboard/admin/orders/${id}/history`}
            className="flex gap-2 items-center py-2 my-2 cursor-pointer mr-4 md:mr-10"
          >
            <h1 className="font-bold ">View History</h1>
          </Link>
        </header>
        <div className="flex justify-between items-center md:w-[90%] mx-auto px-4 text-gray-700 py-6 border-b md:pr-5">
          <h1 className="capitalize font-bold "> username : {user}</h1>
          {/* <p className=" flex md:gap-10">
            <span className="font-semibold">Date</span>
            <span>{date}</span>
            <span className="font-semibold">Time</span>
            <span>{time}</span>
          </p> */}
        </div>
        {order?.length != 0 ? (
          <>
            <div className="relative  shadow-md sm:rounded-lg z-10 w-[96%] md:w-[90%] lg:w-4/5 mx-auto mt-4">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-center ">
                      Items
                    </th>
                    <th scope="col" className="px-4 py-3 text-center">
                      Quantity
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
                  {order?.map((item) => {
                    const { id, completed, quantity } = item;
                    const { name } = item.menu_item;
                    return (
                      <tr key={id}>
                        <td className="px-4 py-3 text-center capitalize">{name}</td>
                        <td className="px-4 py-3 text-center ">{quantity}</td>
                        <td className="px-4 py-3  flex justify-center items-center ">
                          {completed ? (
                            <ImCheckmark className="text-green-500" />
                          ) : (
                            <ImCross className="text-red-600" />
                          )}
                        </td>
                        {!completed ? (
                          <td className="px-4 py-4">
                            <label htmlFor={`completed-${id}`}>
                              <input
                                type="checkbox"
                                id={`completed-${id}`}
                                name={`completed-${id}`}
                                onChange={() => handleCheckboxChange(id)}
                                checked={completed}
                              />
                            </label>
                          </td>
                        ) : null}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="my-2 w-full  flex justify-end pr-4">
                <button onClick={handleSetAllItemsTrue} className=" py-3 underline">Checked All</button>
              </div>
            </div>
          </>
        ) : (
          <div className="relative  shadow-md sm:rounded-lg z-10 w-[96%] md:w-[90%] lg:w-4/5 mx-auto mt-4">
            Empty! no active order{" "}
          </div>
        )}
      </main>
    </>
  );
};

export default OrderDetails;
