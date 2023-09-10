"use client";
import CreateMenu from "@/components/admin-menu/CreateMenu";
import getMenu from "@/lib/getMenu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

const AdminMenu = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/menu/menu-list/", {
          next: { revalidate: 10 },
        });

        if (res.ok) {
          const fetchData = await res.json();
          setData(fetchData);
        } else {
          toast.error("Data fetching Error");
        }
      } catch (error) {
        return "Fetch Error";
      }
    };
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/menu/menu-item/${id}/`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        toast.success("Data Deleted Successfully!");
        setData((prevOrderData) =>
          prevOrderData.result.filter((item) => item.id !== id)
        );
      } else {
        const data = await res.json();
        if (data.error) {
          toast.error(data.error);
        }
      }
    } catch (error) {
      toast.error("An error occurred while making the request.");
    }
  };
  return (
    <>
      <main className="flex flex-wrap px-2">
        {data?.count > 0 ? (
          <>
            <div className="flex justify-end items-center w-full border-b-2 pb-3">
              <button
                type="submit"
                className="md:mr-20 mr-6 flex  items-center justify-start gap-3  rounded-lg p-0.5  bg-gradient-to-br from-orange-500 to-pink-500 "
              >
                <Link
                  href={"/dashboard/admin/menu/add-item"}
                  className="flex items-center justify-center gap-3 px-3 py-2.5 dark:bg-black rounded-md bg-white"
                >
                  <FaPlus className="" />
                  <span>Add Menu</span>
                </Link>
              </button>
            </div>

            <div className="relative  shadow-md sm:rounded-lg z-10 w-[96%] md:w-[90%] lg:w-4/5 mx-auto mt-4">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 hidden md:flex md:px-2 py-3"
                    >
                      Product name
                    </th>
                    <th scope="col" className="px-4 md:hidden md:px-2 py-3">
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3 hidden  items-center"
                    >
                      Category
                    </th>
                    <th scope="col" className="px-4 py-3 ">
                      Price
                    </th>
                    <th scope="col" className="hidden px-4 py-3">
                      Item type
                    </th>
                    <th scope="col" className="px-4 py-3 hidden ">
                      Available
                    </th>
                    <th scope="col" className="px-4 py-3 hidden md:flex">
                      Calorie
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.result.map((item) => (
                    <tr
                      key={item.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <Link
                          href={`/dashboard/admin/menu/details/${item.id}`}
                          className="font-bold capitalize hover:text-orange-500"
                        >
                          {item.name}
                        </Link>
                      </th>
                      <td className="px-4 py-4 hidden md:flex">
                        {item.category}
                      </td>
                      <td className="px-4 py-4 ">{item.price}</td>
                      <td className="px-4 py-4  hidden ">
                        {item.itemtype === true ? "Yes" : "No"}
                      </td>
                      <td className="px-4 py-4  hidden ">
                        {item.available === true ? "yes" : "No"}
                      </td>
                      <td className="px-4 py-4 hidden md:flex ">
                        {item.calorie}
                      </td>
                      <td className="px-4 py-4 text-right">
                        <Link
                          href={`/dashboard/admin/menu/edit-item/${item.id}`}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <button
                          // href={`/dashboard/admin/menu/edit-item/${item.id}`}
                          onClick={() => handleDelete(item.id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <CreateMenu />
        )}
      </main>
    </>
  );
};

export default AdminMenu;
