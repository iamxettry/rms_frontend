"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import EditOrder from "./EditOrder";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const Order = () => {
  const [orderData, setOrderData] = useState([]);
  console.log(orderData);
  const [items, setItems] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [GrandTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = Cookies.get("userId");
        const res = await fetch(`http://127.0.0.1:8000/api/order/cart/`);
        if (res.ok) {
          const data = await res.json();
          const filteredData = data.result.filter(
            (item) => item.u_id.id === parseInt(userId)
          );
          setOrderData(filteredData);
          const grandTotal = filteredData.reduce(
            (total, item) => total + item.totalPrice,
            0
          );
          setGrandTotal(grandTotal);
        }
      } catch (error) {
        toast.error("connection Failed!!");
      }
    };
    fetchData();
  }, [toggle]);

  const handleClick = async (id) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/order/cart/${id}/`);
      if (res.ok) {
        const data = await res.json();
        setItems(data);
      }
    } catch (error) {
      toast.error("connection Failed!!");
    }
    setToggle(true);
  };
  const updateOrder = async (id, updatedData) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/order/cart/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        // Handle the success case (e.g., update the UI)
        const data = await res.json();
        setToggle(false);
        toast.success("Updated Successfully");
      } else {
        // Handle the error case
        const data = await res.json();
        console.error("Failed to update order", data);
        console.error("Failed to update order");
      }
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/order/cart/${id}/`, {
        method: "DELETE",
      });

      if (res.ok) {
        // Handle the success case (e.g., update the UI)
        toast.success("Item remove from cart!!");
        // Remove the deleted item from the orderData state
        setOrderData((prevOrderData) =>
          prevOrderData.filter((item) => item.id !== id)
        );
      } else {
        // Handle the error case
        const data = await res.json();
        console.error("Failed to delete item", data);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("connection Failed!!");
    }
  };

  const orderNow = async () => {
    try {
      const simplifiedData = orderData.map((item) => ({
        quantity: item.quantity,
        account: item.u_id.id,
        menu_item: item.f_id.id,
      }));
      const res = await fetch(`http://127.0.0.1:8000/api/order/orders/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(simplifiedData),
      });
      if (res.ok) {
        const data = await res.json();
        toast.success(data.msg);
        console.log("successful", data.msg);
        // Clear the cart after successfully placing the order
        const clearCartResponse = await fetch(
          `http://127.0.0.1:8000/api/order/cart/`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (clearCartResponse.ok) {
          console.log("Cart cleared successfully");
          // You can optionally update your UI to reflect that the cart is empty.
        } else {
          console.log("Failed to clear cart");
          // Handle the error appropriately, e.g., show an error message.
        }
      } else {
        const data = await res.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      toast.error("connection Failed!!");
    }
  };

  return (
    <>
      <div className="relative mb-5">
        <div className="flex justify-between my-5 items-center w-full border-b-2 pb-3">
          <h1 className="text-xl  ml-6 md:text-3xl font-bold text-gray-700 dark:text-gray-400">
            Order your food
          </h1>
          <button
            type="submit"
            className="md:mr-20 mr-6 flex  items-center justify-start  md:gap-3  rounded-lg p-0.5  bg-gradient-to-br from-orange-500 to-pink-500 "
          >
            <Link
              href={"/menu"}
              className="flex items-center justify-center gap-1 md:gap-3 p-1 md:px-3 md:py-2.5 dark:bg-black rounded-md bg-white"
            >
              <FaPlus className="text-sm md:backdrop-sepia-0" />
              <span className="hidden md:block">Add another</span>
              <span className="md:hidden">More</span>
            </Link>
          </button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg min-h-[200px]">
          <div className={toggle ? "" : "hidden"}>
            <EditOrder
              data={items}
              updateOrder={updateOrder}
              setToggle={setToggle}
            />
          </div>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-fit ">
              <tr>
                <th
                  scope="col"
                  className="text-[10px] xs:text-[12px] px-1 md:px-6 py-3"
                >
                  Food Name
                </th>
                <th
                  scope="col"
                  className="text-[10px] xs:text-[12px] px-1 md:px-6 py-3"
                >
                  quantity
                </th>
                <th
                  scope="col"
                  className="text-[10px] xs:text-[12px] px-1 md:px-6 py-3"
                >
                  Total price
                </th>
                <th scope="col" className="">
                  <span className="sr-only">Edit</span>
                </th>
                <th scope="col" className=" ">
                  <span className="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody className="w-fit">
              {orderData.length === 0 ? (
                <tr>
                  <td className="px-5 text-xl">No Item In Cart!!</td>
                </tr>
              ) : (
                orderData.map((item, i) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    {/* <td className="px-6 py-4">{item.u_id.id}</td>
                  <td className="px-6 py-4">{item.f_id.id}</td> */}

                    <td className="text-[10px] px-2 xs:text-[14px] md:px-6 py-3 capitalize">
                      {item.f_id.name}
                    </td>
                    <td className="text-[10px] px-2 xs:text-[14px] md:px-6 py-3">
                      {item.quantity}
                    </td>
                    <td className="text-[10px] px-2 xs:text-[14px] md:px-6 py-3">
                      {item.totalPrice}
                    </td>
                    {/* <td className="text-[10px] px-2 xs:text-[14px] md:px-6 py-3">{item.grand_total}</td> */}
                    <td className="text-[10px] px-2 xs:text-[14px] md:px-6 py-3 text-right">
                      <button
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => handleClick(item.id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="text-[10px] px-2 xs:text-[14px] md:px-6 py-3 text-right">
                      <button
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => handleDelete(item.id)}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex w-full justify-between items-center px-4 mt-10 ">
          <div className="flex gap-3 items-center justify-center flex-col md:flex-row bg-slate-200 dark:bg-slate-700  p-3">
            <h1 className="text-sm xs:text-base"> GrandTotal price</h1>
            <p className="text-blue-500">
              <span>Rs</span> {GrandTotal}
            </p>
          </div>
          {orderData.length === 0 ? (
            ""
          ) : (
            <button
              type="submit"
              className={`  md:mr-20 mr-6 flex  items-center justify-start gap-3  rounded-lg p-0.5  bg-gradient-to-br from-orange-500 to-pink-500`}
              onClick={orderNow}
            >
              <Link
                href={"/dashboard/user/myorder"}
                className="flex items-center justify-center gap-3 px-3 py-2.5 dark:bg-black rounded-md bg-white"
              >
                <FaPlus className="text-sm xs:text-base hidden xs:flex" />
                <p className="md:flex gap-2">
                  Order <span className="hidden md:block">Now</span>
                </p>
              </Link>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Order;
