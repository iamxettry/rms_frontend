import React from 'react'
import { FaStore } from 'react-icons/fa'

const NavCard = () => {
  return (
    <div className='flex justify-between items-center light_bg text-black px-4 rounded-md my-2 text-2xl'>
        <i><FaStore/></i>
        <h1>Store</h1>
    </div>
  )
}

export default NavCard