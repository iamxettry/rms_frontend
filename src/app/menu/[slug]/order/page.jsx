"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Order =  ({ params }) => {
  const [orderData, setOrderData] = useState([]);

  console.log(orderData);
  useEffect(()=>{
    const fetchData=async ()=>{
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/order/cart/`);
         if (res.ok) {
          const data=await res.json()
          setOrderData(data)
         }
      } catch (error) {
          toast.error("connection Failed!!")
      }
    }
    fetchData()
  },[])

 
  const handleSumbit = (e) => {
    e.preventDefault();


    
  };

  return (
    <>
      <div>
        <h1>Order your food</h1>
          <Link href={'/menu/'}>
          <h3>+</h3></Link>
        <div>
          <table>
            <thead>
              <tr>
                <th>userId</th>
                <th>foodId</th>
                <th>no Of item</th>
              </tr>
            </thead>
            <tbody>
              {
                orderData.map((item)=>(
                  <tr key={item.id}>
                <td>{item.u_id}</td>
                <td>{item.f_id}</td>
                <td>{item.quantity}</td>
              </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        <div className="flex w-full justify-center items-center ">
          <button>Order</button>
        </div>
      </div>
    </>
  );
};

export default Order;
