'use client'

import { useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa"

const IncDec = () => {
    const [count, setCount] = useState(0)
     // Function to increment the count
  const incrementCount = () => {
    
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrementCount = () => {
    if (count > 0) {
        setCount(count - 1);
      }
  };
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
    </>
  )
}

export default IncDec