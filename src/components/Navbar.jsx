"use client";
import React, { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Logo from "../utils/Logo";
import Link from "next/link";
import { Navlink } from "@/constant/Navlinks";
import DropDown from "./DropDown";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    }else{
      setHidden(false)
    }
  });

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{duration:0.35,ease:"easeInOut"}}
        className=" light_bg py-1 dark:bg-black sticky top-0 z-30 md:z-50    border-b drop-shadow-md dark:border-b-slate-300 dark:border-opacity-30 "
      >
        <div className="relative w-full md:w-4/5 flex flex-wrap items-center justify-between mx-auto px-4 md:px-0 ">
          <Logo />

          <DropDown toggle={toggle} setToggle={setToggle} />
          <div className="md:hidden absolute h-[64px] top-0 grid place-content-center  right-36 ">
            <DarkModeToggle />
          </div>
          {/* Navlinks */}
          <div
            className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${
              toggle ? "" : "hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-green-200 md:flex-row md:bg-transparent md:space-x-8 md:mt-0 md:border-0 dark:bg-black md:dark:bg-black dark:border-gray-700 ">
              <div className="hidden md:block">
                <DarkModeToggle />
              </div>
              {Navlink.map((link, index) => {
                let isActive = pathname === link.path;
                return (
                  <Link
                    href={link.path}
                    key={index}
                    onClick={() => setToggle(false)}
                    className={
                      isActive
                        ? "bg-green-700 rounded text-white py-2 pl-3 md:hover:text-orange-700 md:text-orange-500 md:bg-transparent md:p-0  font-bold"
                        : "font-bold py-2 pl-3 text-gray-700 border-b border-b-gray-100 rounded hover:bg-green-400  md:p-0 md:bg-transparent md:hover:bg-transparent md:border-0 hover:text-white md:hover:text-black/90 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-green-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    }
                    aria-current="page"
                  >
                    {link.title}
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
