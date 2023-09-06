"use client"
import { getToken, removeToken } from "@/redux/features/localStorage";
import { useGetLoggedUserQuery } from "@/redux/services/users/userApi";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { profile1 } from "../../public/assets";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Cookies from "js-cookie";


const DropDown = ({ toggle, setToggle }) => {
  const [togglePorfile, setTogglePorfile] = useState(false);
  const router=useRouter()
  const accessToken = Cookies.get('access_token');
  const handleLogout = () => {

    Cookies.remove("loggedin")
    Cookies.remove("access_token")
    Cookies.remove("refresh_token")
    Cookies.remove("superuser")
    setTogglePorfile(!togglePorfile);
    router.push('/')
    toast.success("Logout successful!")
    
  };
  
  const { data } = useGetLoggedUserQuery(accessToken);
  const userId=data?.id
  Cookies.set("user",userId)
 
  return (
    <>
      <div className="flex relative items-center md:order-2">
        
        {
          !data ? (
            <div className="px-2 bg-gray-200  py-1 mx-2 hover:bg-gray-100 hover:border-gray-400 border border-white rounded-lg dark:shadow-md dark:shadow-gray-700 dark:bg-gray-800 dark:hover:bg-transparent dark:border-gray-700  dark:border dark:hover:border-orange-200  ">
            <Link
              href="/auth/signup/"
              className="font-bold dark:text-white dark:hover:text-orange-400"
            >
              Signup
            </Link>
          </div>
          ):(
            
          <div>
          <button
            type="button"
            onClick={() => setTogglePorfile(!togglePorfile)}
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 dark:bg-white"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <Image className="w-8 h-8 rounded-full border" src={profile1} alt="user photo"/>
          </button>
          {/* -- Dropdown menu -- */}
          <div
            className={`z-50 ${
              togglePorfile ? "" : "hidden"
            } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-6 right-0 transition-transform ease-linear duration-100`}
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
              {data.username}
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                {data.email}
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              
              {
                data?.is_superuser ?<li>
                <Link
                  href="/dashboard/admin"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Admin
                </Link>
              </li>:
                <li>
                <Link
                  href="/dashboard/user"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Profile
                </Link>
              </li>
              }
            
              
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>

              <li onClick={handleLogout}>

                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
          )
        }
         
      
        

        {/* toggle  menu */}
        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="w-5 h-5"
          />
        </button>
      </div>
    </>
  );
};

export default DropDown;
