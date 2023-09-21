'use client'
import React from "react";
import { toast } from "react-toastify";

const DeleteButton = ({ id, onDelete }) => {
  const handleDelete = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/menu/menu-item/${id}/`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Data Deleted Successfully!");
        onDelete(id);
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
    <button
      onClick={handleDelete}
      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
