"use client";
import Image from "next/image";
import { FaPlus, FaHeart } from "react-icons/fa";
import Link from "next/link";
import BackLight from "../backLight/Backlight";
import { useEffect, useState } from "react";
import getCategoryList from "@/lib/getCategory";
import { selectSearchValue } from "@/redux/features/filterSearchSlice";
import { useSelector } from "react-redux";
const MenuList = () => {
  // const [favourite, setfavourite] = useState(false);
  const [category, setCategory] = useState([]);
  const searchTerm=useSelector(selectSearchValue)
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategoryList();
      if (searchTerm) {
        // Filter the data based on the search term
        const filteredData = data.result.map((categoryItem) => ({
          ...categoryItem,
          data: categoryItem.data.filter((item) =>
            item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
          ),
        }));

        setCategory(filteredData);
      } else {
        // If no search term, set the data as it is
        setCategory(data.result);
      };
    };
    fetchData();
  }, [setCategory,searchTerm]);

  return (
    <>
      <div className="relative z-10 text-black dark:text-white text-opacity-70">
        {/* menu nav category */}
        <div className="my-3">
          <div className="flex bg-white rounded-md px-4 py-3 justify-start items-center gap-5 dark:bg-slate-800 dark: dark:bg-opacity-50 dark:drop-shadow-md flex-wrap">
            {category?.map((item) => (
              <li key={item.category} className="list-none">
                <a
                  href={`#${item.category}`}
                  className="transition-all text-2xl ease-in capitalize font-bold hover:text-orange-500"
                >
                  {item.category}
                </a>
              </li>
            ))}
          </div>
          <div className=" px-4 w-full py-3 my-4 bg-white dark:bg-slate-800 dark:bg-opacity-50 flex items-center gap-5  font-bold   rounded-md ">
           
            <Link href={"/menu/veg"} className="hover:text-orange-500">
              Veg Menu
            </Link>
            <Link href={"/menu/non-veg"} className="hover:text-orange-500">
              Non-veg Menu
            </Link>
            <Link href={"/menu/all-items"} className="hover:text-orange-500">
              View All Menu
            </Link>
          </div>
        </div>
        {/* menu list */}

        {category?.map((items) => (
          <div className="my-3" id={items.category} key={`#${items.category}`}>
            <div className="px-4 w-full py-1 bg-white dark:bg-slate-800 dark:bg-opacity-50 rounded-md">
              <h1 className="font-bold capitalize text-2xl">{items.category}</h1>
            </div>
            <div className="grid grid-cols-2 rounded-lg md:grid-cols-3 lg:grid-cols-4">
              {/* map the items */}
              {items?.data?.map((item) => (
                <div
                  className="flex flex-col items-center  bg-white border-gray-200 m-2 px-4 py-4 gap-2 rounded-lg relative dark:bg-slate-200 dark:bg-opacity-10  dark:text-white/70  shadow-lg dark:shadow-sm shadow-slate-500 dark:shadow-yellow-50  border dark:border-gray-600 dark:hover:border-orange-500  hover:border-orange-500"
                  key={item.id}
                >
                  {/* {
               // later change based through database
               favourite ? (
                 <FaHeart
                   className={`absolute right-2 top-2 text-red-700 cursor-pointer`}
                   onClick={() => setfavourite(!favourite)}
                 />
               ) : (
                 <AiOutlineHeart
                   className={`absolute right-2 top-2 cursor-pointer`}
                   onClick={() => setfavourite(!favourite)}
                 />
               )
             } */}
                  <Link
                    href={`/menu/${item.id}`}
                    className="w-full flex flex-col justify-around items-center "
                  >
                    {/* <BackLight style=" h-20 w-20 top-12 left-10 blur-[50px]  bg-gradient-to-r from-green-500 to-white" /> */}

                    <Image
                      src={item.img}
                      priority
                      height={300}
                      width={300}
                      className=" rounded-lg  "
                      alt={item.name}
                    />
                    <h1 className="capitalize text-start w-full text-black text-opacity-80  text-lg my-2 dark:text-white">
                      <b>{item.name}</b>
                    </h1>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-black text-opacity-80 dark:text-white text-sm xs:text-base">
                        <b>Rs {item.price}</b>
                      </p>

                      <p className="p-1 xs:p-2 rounded-full  text-white bg-orange-500 ">
                        <FaPlus />
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuList;
