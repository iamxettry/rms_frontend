"use client";

import Details from "@/components/menu/Details";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const page = ({ params }) => {
  const { id } = params;
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/menu/menu-item/${id}/`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        toast.success("Data Deleted Successfully!")
        router.push('/dashboard/admin/menu')
      } else {
        const data = await res.json();
        if (data.error) {
          toast.error(data.error);
        }
      }
    } catch (error) {
      toast.error("An error occurred while making the request.");
    }
  };
  return (
    <div>
      <div className="flex gap-4 justify-end  border-b-2 py-2 px-4">
      <button onClick={handleDelete} className="border-2 px-4 py-2 rounded-md border-red-400
      ">Delete</button>
        <Link href={`/dashboard/admin/menu/edit-item/${id}`} className="border-2 px-4 py-2 rounded-md border-blue-400">Edit</Link>
      </div>

      <Details id={id} />

    </div>
  );
};

export default page;
