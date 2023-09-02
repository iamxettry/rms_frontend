"use client";

import { HiMagnifyingGlass } from "react-icons/hi2";

import { data } from "./data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const List = ({ toggle }) => {
  const pathname = usePathname();
  return (
    <>
      <ul>
        {/* <li className="group flex h-[50px] w-full items-center text-black dark:text-white bg-green-50 dark:bg-slate-800 rounded-xl   relative mb-2">
          <i
            className="w-[50px] h-[50px] flex items-center justify-center  dark:hover:bg-white hover:text-black hover:rounded-xl cursor-pointer "
            onClick={() => setToggle((prev) => !prev)}
          >
            <HiMagnifyingGlass className="w-8 " />
          </i>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className={`w-[70%] rounded-xl text-xl focus:outline-none bg-transparent ${
              toggle ? "w-150 transition-all ease-in delay-500" : "hidden"
            }`}
          />
          <span
            className={` ${
              toggle ? "hidden" : "group-hover:block"
            } absolute left-[66px] top-0 rounded-xl text-black dark:text-white px-7 py-2  shadow-lg hidden border `}
          >
            Search
          </span>
        </li> */}
        {data.map((item) => {
           let isActive= pathname===`${item.path}`
           
          return (
            <li
              className={`${isActive?"bg-green-200 dark:bg-white  text-black dark:hover:text-white ":"dark:text-white"} group text-black  hover:bg-green-200 dark:hover:bg-slate-800 hover:text-black rounded-xl   relative`}
              key={item.id}
            >
              <Link
                href={`${item.path}`}
                className={`h-[50px]  flex items-center justify-start gap-6 ${
                  toggle ? "pl-4 text-xl " : "justify-center text-3xl"
                }`}
              >
                <i className="h-full   flex justify-center items-center">
                  <item.icon />
                </i>

                <span className={` ${toggle ? "text-lg " : "hidden"}`}>
                  {item.title}
                </span>
              </Link>
              <span
                className={`${
                  toggle ? "hidden" : "group-hover:block"
                } absolute left-[66px] top-0 rounded-xl text-black dark:text-white px-7 py-2 ml-1 drop-shadow-lg  shadow-lg  hidden dark:bg-slate-300 dark:bg-opacity-10 dark:shadow-md `}
              >
                {item.hover}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
