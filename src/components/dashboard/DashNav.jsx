"use client";
import Logo from "@/utils/Logo";
import NavCard from "./NavCard";
import { FaSearch } from "react-icons/fa";

import { data, data1 } from "./adminConstant";
import { usePathname } from "next/navigation";
const DashNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-60  border-r h-screen ">
      <div className="w-full my-2 border-b px-4">
        <Logo />
      </div>
      <div className=" pl-4">
        <div className="border px-2 rounded-md w-48 flex items-center gap-5 mx-4">
          <i className="text-black text-opacity-50 text-xl">
            <FaSearch />
          </i>
          <input
            type="text"
            name="search"
            id="search"
            className="py-2 focus:outline-none  w-full bg-transparent"
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
                    ? " bg-black bg-opacity-20 rounded-l-md w-full transition-all ease-in "
                    : ""
                }
              >
                <NavCard item={item} />
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
                <NavCard item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DashNav;
