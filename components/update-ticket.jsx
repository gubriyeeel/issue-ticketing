"use client";

import { useRouter } from "next/navigation";
import { Pencil } from "lucide-react";

import cn from "clsx";

const UpdateTicket = ({ className, ticketId }) => {
  const router = useRouter();

  return (
        <Pencil
          onClick={() => {
            router.push(`/ticket/${ticketId}`);
          }}
          className={cn(
            "w-4 h-4 cursor-pointer hover:text-slate-900/70 text-slate-900 dark:text-slate-200 dark:hover:text-slate-400",
            className
          )}
        />
  );
};

export default UpdateTicket;
