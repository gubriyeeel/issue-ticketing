"use client";

import { useRouter } from "next/navigation";

import { Trash } from "lucide-react";
import { toast } from "react-hot-toast";

import cn from "clsx";

const DeleteTicket = ({ className, ticketId }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    const response = await fetch(
      `http://localhost:3000/api/tickets/${ticketId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      toast.success("Ticket deleted!");
      router.refresh();
    }
  };

  return (
    <Trash
      onClick={deleteTicket}
      className={cn(
        "w-4 h-4 cursor-pointer hover:text-red-300 text-red-400 dark:text-red-600 dark:hover:text-red-400",
        className
      )}
    />
  );
};

export default DeleteTicket;
