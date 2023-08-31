import React from 'react'

import {FaSearch} from 'react-icons/fa'
import {HiAdjustments} from 'react-icons/hi'
const SearchBar = () => {
  return (
    <>
        <div className='flex bg-black bg-opacity-10 items-center rounded-full px-4 gap-2 dark:bg-black dark:bg-opacity-50 dark:border w-96'>
            <FaSearch className=' text-xl text-gray-700 dark:text-white dark:text-opacity-70'/>
            <input type="text" id="search" 
            placeholder='Search your favourite food'
            className='w-full outline-none  focus:outline-none bg-transparent py-2   dark:border-none ' />
            <HiAdjustments className='text-xl dark:text-white dark:text-opacity-70'/>
        </div>
       
    </>
  )
}

export default SearchBar