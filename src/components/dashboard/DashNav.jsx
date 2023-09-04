"use client";
import NavCard from "./NavCard";
import { FaSearch } from "react-icons/fa";

import { data, data1 } from "./adminConstant";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {

  ImArrowLeft2,
  ImArrowRight2,
  ImLeaf,
} from "react-icons/im";
import { useState } from "react";
import Logo from "@/utils/Logo";
const DashNav = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleSearch, setTogglesearch] = useState(false);

  const pathname = usePathname();

  return (
    <div
      className={`${
        toggle ? "w-32  xs:w-40  md:w-52 absolute left-0 z-20 bg-slate-800 md:bg-transparent md:relative" : "w-16 md:w-52"
      }   border-r min-h-screen `}
    >
      <div className="w-full my-2 border-b px-4 flex items-center justify-center gap-2">
        
        <Link
          href={"/"}
          className={`${
            toggle ? "flex" : "hidden"
          }  items-center py-2 text-xl font-semibold text-gray-900 dark:text-white md:hidden `}
        >
          <span className="self-center  font-semibold whitespace-nowrap dark:text-white">
            B<span className="text-orange-500">D.</span>
          </span>
          <ImLeaf className="text-green-500" />
        </Link>
        <div className="hidden md:block">
        <Logo/>
        </div>
          
        <div
          className={`${
            toggle ? "text-2xl" : "text-3xl"
          } w-full  dark:text-white cursor-pointer flex-1`}
        >
         
          {toggle ? (
            <ImArrowLeft2
              onClick={() => setToggle((prev) => !prev)}
              className="w-8 mx-auto md:hidden "
            />
          ) : (
            <ImArrowRight2
              onClick={() => setToggle((prev) => !prev)}
              className="w-8 mx-auto md:hidden"
            />
          )}
        </div>
      </div>
      <div className=" md:pl-4">
        <div className="border-2  px-3   rounded-md   flex items-center gap-5 mx-2 md:mx-4">
          <i className="text-black text-opacity-50 md:text-xl dark:text-white" onClick={()=>setToggle(true)}>
            <FaSearch />
          </i>
          <input
            type="text"
            name="search"
            id="search"
            className={`py-2 focus:outline-none  w-full bg-transparent ${toggle?"flex":" p-2 "} `}
            placeholder="Search"
          />
        </div>
        <ul className="border-b">
          {data.map((item) => {
            let isActive = pathname === `${item.path}`;
            return (
              <li
                key={item.id}
                className={
                  isActive
                    ? " bg-black bg-opacity-20 rounded-l-md w-full transition-all ease-in"
                    : ""
                }
              >
                <NavCard item={item} toggle={toggle} setToggle={setToggle} />
              </li>
            );
          })}
        </ul>
        <ul>
          {data1.map((item) => {
            let isActive = pathname === `${item.path}`;
            return (
              <li
                key={item.id}
                className={
                  isActive
                    ? " bg-black bg-opacity-20 rounded-md transition-all ease-in "
                    : ""
                }
              >
                <NavCard item={item} toggle={toggle} setToggle={setToggle} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DashNav;
