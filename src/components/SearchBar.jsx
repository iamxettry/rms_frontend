'use client'
import { setSearchTerm } from '@/redux/features/filterSearchSlice'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import {FaSearch} from 'react-icons/fa'
import {HiAdjustments} from 'react-icons/hi'
import { useDispatch } from 'react-redux'
const SearchBar = () => {
  
  const dispatch=useDispatch()

  return (
    <>
        <div className='flex bg-black bg-opacity-10 items-center rounded-full px-4 gap-2 dark:bg-black dark:bg-opacity-50 dark:border w-auto'>
            <FaSearch className=' text-xl text-gray-700 dark:text-white dark:text-opacity-70'/>
            <input type="text" id="search" 
            placeholder='Search your favourite food'
            className='w-full outline-none  focus:outline-none bg-transparent py-2   dark:border-none '  onChange={(e)=>dispatch(setSearchTerm(e.target.value))} />
            <HiAdjustments className='text-xl dark:text-white dark:text-opacity-70'/>
        </div>
       
    </>
  )
}

export default SearchBar