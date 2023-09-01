"use client"
import Navbar from '@/components/Navbar'
import React from 'react'
import { useSelector } from "react-redux";
import { selectCurrentMode } from '@/redux/features/darkModeSlice';
import { ToastContainer } from 'react-toastify';
const Main = ({children}) => {
    let mode = useSelector(selectCurrentMode)
  return (
    <>
    <ToastContainer></ToastContainer>
     <main className={mode?"dark":undefined} >
          <div className="light_bg dark:bg-black dark:text-white/90 min-h-screen relative ">
            <Navbar />
            <div className="w-[90%] sm:w-4/5 mx-auto">{children}</div>
          </div>
          </main>
    </>
  )
}

export default Main