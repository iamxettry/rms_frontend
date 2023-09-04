"use client";

import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { hero10bgremoved } from "../../../../../../../public/assets";
import { useEffect, useState } from "react";

const EditItem = ({ params }) => {
  const router = useRouter();
  const { id } = params;
  const [data, setData] = useState({
    name: "",
    category: "",
    price: "",
    itemtype: "",
    img: '',
    available: "",
    calorie: "",
  });
  useEffect(() => {
    // Fetch data using a GET request with the provided itemId
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/menu/menu-item/${id}/`,
          { next: { revalidate: 0 } }
        );

        if (response.ok) {
          const data = await response.json();
          // Set the retrieved data as the initial form values
          setData(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });

  };
  const handleFileInputChange = (event) => {
    const { name, files } = event.target;
    setData({
      ...data,
      [name]: files[0], // Store the selected file in the state
    });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      // Append all form data including the file to FormData
      for (const key in data) {
        formData.append(key, data[key]);
      }
      const res = await fetch(
        `http://127.0.0.1:8000/api/menu/menu-list/${id}/`,
        {
          method: "PUT",

          body: formData,
        }
      );
      if (res.ok) {
        const newData = await res.json();
        // Handle successful response here
        toast.success(newData.message);
        router.push("/dashboard/admin/menu");
      } else {
        // Handle non-200 responses here
        toast.error(res.statusText);
      }
    } catch (error) {
      toast.error("Network Error", error);
    }
  };
  return (
    <>
      <div className=" flex flex-col gap-3 w-72 mx-auto md:w-96 lg:w-full">
        <div className="w-full flex items-center justify-end my-5">
          <Link
            href="/dashboard/admin/menu"
            className="text-xl bg-black dark:bg-white dark:text-black bg-opacity-25 hover:bg-opacity-10 p-3 rounded-full mr-5 md:mr-2 lg:mr-10"
          >
            <RxCross2 />
          </Link>
        </div>

        <div className="md:flex justify-between items-center gap-4 dark:text-white">
          <form
          encType="multipart/form-data"
            action=""
            className="   rounded-md flex-1 flex flex-col justify-center items-start "
            onSubmit={handleSumbit}
          >
            <div className="flex text-black/80 dark:text-white/80 dark:border-white/80 gap-2 my-3 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-start items-center">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleInputChange}
                className="rounded-md focus:outline-none px-3 bg-transparent w-full"
                placeholder="Enter the item name"
              />
            </div>
            <div className="flex text-black/80 dark:text-white/80 dark:border-white/80 gap-2 my-3 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-start items-center">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                name="category"
                value={data.category}
                onChange={handleInputChange}
                className="rounded-md focus:outline-none px-3 bg-transparent w-full"
                placeholder="Enter the item Category"
              />
            </div>
            <div className="flex text-black/80 dark:text-white/80 dark:border-white/80 gap-2 my-3 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-start items-center">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={data.price}
                onChange={handleInputChange}
                className="rounded-md focus:outline-none px-3 bg-transparent  w-full"
                placeholder="Enter the product price(unit)"
              />
            </div>
            <div className="flex text-black/80 dark:text-white/80 dark:border-white/80  my-3 gap-2 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-start items-center ">
              <p className="flex items-center gap-2">
                <label htmlFor="itemtype">Item type</label>
                <input
                  type="radio"
                  name="itemtype"
                  className="ml-5 md:ml-14"
                  value={data.itemtype}
                  checked={data.itemtype}
                  onChange={handleInputChange}
                />
                <span>veg</span>
                <input
                  type="radio"
                  name="itemtype"
                  className="ml-4 md:ml-14"
                  value={data.itemtype}
                  checked={data.itemtype}
                  onChange={handleInputChange}
                />
                <span>non veg</span>
              </p>
            </div>
            <div className="flex text-black/80 dark:text-white/80 dark:border-white/80 gap-2 my-3 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-between items-center">
              <label htmlFor="img">Upload Image</label>
              <input
                type="file"
                name="img"
                accept="image/*"
                className=""
                onChange={handleFileInputChange}
              />
            </div>
            <div className="flex text-black/80 dark:text-white/80 dark:border-white/80 gap-2 my-3 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-start items-center">
              <p className="flex items-center gap-2">
                <label htmlFor="available">Available</label>
                <input
                  type="radio"
                  name="available"
                  className="ml-5 md:ml-10"
                  value={data.available}
                  checked={data.available}
                  onChange={handleInputChange}
                />
                <span>yes</span>
                <input
                  type="radio"
                  name="available"
                  className="ml-4 md:ml-10"
                  value={data.available}
                  checked={data.available}
                  onChange={handleInputChange}
                />
                <span>no</span>
              </p>
            </div>
            <div className="flex text-black/80 dark:text-white/80 dark:border-white/80 gap-2 my-3 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-start items-center">
              <label htmlFor="calorie">Calorie</label>
              <input
                type="number"
                name="calorie"
                value={data.calorie}
                onChange={handleInputChange}
                className="rounded-md focus:outline-none px-3 bg-transparent w-full"
                placeholder="Enter the item kalorie"
              />
            </div>

            <div className="flex justify-end items-center w-full">
              <button
                type="submit"
                className="mr-20 flex  items-center justify-start gap-3 border-2 rounded-md py-2 px-3 border-orange-500"
              >
                <FaPlus />
                <span>Add Item</span>
              </button>
            </div>
          </form>
          <div className="hidden lg:flex lg:flex-1">
            <Image
              src={hero10bgremoved}
              height="auto"
              width="auto"
              priority
              alt="food item"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditItem;
