"use client";

import Image from "next/image";
import { hero10bgremoved } from "../../../../../../public/assets";
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { FaPlus } from 'react-icons/fa'

const AddItem = () => {
  const router = useRouter();
  const handleSumbit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/menu/menu-list/`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data=await res.json()
        // Handle successful response here
        toast.success(data.message)
        router.push("/dashboard/admin/menu")
      } else {
        // Handle non-200 responses here
        toast.error(res.statusText)
        toast.error("Check the fields!")
       
      }
    
    } catch (error) {
      toast.error("Network Error", error);
    }
  };
  return (
    <>
      <div className=" flex flex-col gap-3 w-72 mx-auto md:w-96 lg:w-full">
        <div className=" flex items-center justify-end my-5">
          <Link
            href="/dashboard/admin/menu"
            className="text-xl bg-black dark:bg-white dark:text-black bg-opacity-25 hover:bg-opacity-10 p-3 rounded-full mr-5 md:mr-2 lg:mr-10"
          >
            <RxCross2 />
          </Link>
        </div>
        <div className="md:flex justify-between items-center gap-4 dark:text-white">
          <form
            action=""
            className="   rounded-md flex-1 flex flex-col justify-center items-start "
            onSubmit={handleSumbit}
            encType="multipart/form-data"
          >
            <div className="flex text-black/80 dark:text-white/80 dark:border-white/80 gap-2 my-3 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-start items-center">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
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
                className="rounded-md focus:outline-none px-3 bg-transparent  w-full"
                placeholder="Enter the product price(unit)"
              />
            </div>
            <div className="flex text-black/80 dark:text-white/80 dark:border-white/80  my-3 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-start items-center gap-5">
              <p className="flex items-center gap-2">
                <label htmlFor="itemtype">Item type</label>
                <input type="radio" name="itemtype" className="ml-5 md:ml-14" />
                <span>veg</span>
                <input type="radio" name="itemtype" className="ml-4 md:ml-14" />
                <span>non veg</span>
              </p>
            </div>
            <div className="flex  text-black/80 dark:text-white/80 dark:border-white/80 gap-2 my-3 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-between items-center">
              <label htmlFor="img" className="text-sm md:text-base">
                Upload Image
              </label>
              <input
                type="file"
                name="img"
                accept="image/*"
                className="text-sm md:text-base"
              />
            </div>
            <div className="flex text-black/80 dark:text-white/80 dark:border-white/80 gap-2 my-3 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-start items-center">
              <p className="flex items-center gap-2">
                <label htmlFor="available">Available</label>
                <input
                  type="radio"
                  name="available"
                  className="ml-5 md:ml-10"
                />
                <span>yes</span>
                <input
                  type="radio"
                  name="available"
                  className="ml-4 md:ml-10"
                />
                <span>no</span>
              </p>
            </div>
            <div className="flex text-black/80 dark:text-white/80 dark:border-white/80 gap-2 my-3 border-b-2 w-full border-black border-opacity-50 pb-2 pl-2 justify-start items-center">
              <label htmlFor="calorie">Calorie</label>
              <input
                type="number"
                name="calorie"
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

export default AddItem;
