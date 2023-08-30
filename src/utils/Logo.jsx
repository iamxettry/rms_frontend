import Link from 'next/link'
import React from 'react'
import { ImLeaf } from 'react-icons/im'

const Logo = () => {
  return (
    <>
    <Link href={"/"} id='bubble' className="flex items-center py-4 text-2xl font-semibold text-gray-900 dark:text-white ">
      <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
              Bubble<span className="text-orange-500">Dubble.</span>
            </span><ImLeaf className="text-green-500"/>   
      </Link>
    </>
  )
}

export default Logo