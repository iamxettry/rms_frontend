'use client'

import Cookies from "js-cookie"
import { useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa"

const IncDec = ({data}) => {
    const [count, setCount] = useState(1)
     // Function to increment  the count

  const incrementCount = () => {
    
    setCount(count + 0.5);
    Cookies.set('count',count)
  };

  // Function to decrement the count
  const decrementCount = () => {
    if (count >= 1) {
        setCount(count - 0.5);
        Cookies.set('count',count)
      }
  };
  const totalPrice=count*data.price
  return (
    <>
        <div className="flex gap-5 bg-orange-500 py-3 px-5 items-center rounded-full text-white text-2xl">
              <i >
                <FaMinus onClick={decrementCount}/>
              </i>
              <h4>{count}</h4>
              <i>
                <FaPlus onClick={incrementCount} />
              </i>
            </div>
            <h1 className="flex flex-col md:flex-row bg-slate-200 dark:bg-opacity-10  dark:text-white p-2  rounded-md">
              <span className="font-bold text-sm xs:text-xl w-32 text-black text-opacity-60 text-center dark:text-white ">
                Total Price
              </span>
              <span className="font-bold text-sm xs:text-xl text-center">
                Rs {totalPrice}
              </span>
            </h1>
    </>
  )
}

export default IncDec