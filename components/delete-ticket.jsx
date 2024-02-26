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
      router.push("/");
    }
  };

  return (
    <Trash
      onClick={deleteTicket}
      className={cn(
        "w-4 h-4 cursor-pointer text-red-600 hover:text-red-600/70",
        className
      )}
    />
  );
};

export default DeleteTicket;
