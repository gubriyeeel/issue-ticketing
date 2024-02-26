import { ExternalLink } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DeleteTicket from "@/components/delete-ticket";
import PriorityIcons from "@/components/priority-icons";
import Status from "@/components/status";
import UpdateTicket from "@/components/update-ticket";

const TicketCard = ({ ticket }) => {
  const formatTimeStamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  };

  return (
    <Card>
      <CardHeader className="pb-4">
          <CardTitle className="flex flex-row gap-2 items-center text-md font-light hover:underline">
            <span>{ticket.title}</span>
            <ExternalLink className="w-4 h-4" />{" "}
          </CardTitle>
        <div>
          <PriorityIcons priority={ticket.priority} />
        </div>
      </CardHeader>
      <CardContent className="text-xs font-light">
        {ticket.description}
      </CardContent>
      <CardFooter className="flex flex-col justify-start items-start gap-4">
        <div>
          <p className="text-xs font-medium text-gray-500">
            {formatTimeStamp(ticket.createdAt)}
          </p>
        </div>
        <div className="w-full flex gap-4 items-center">
          <Status status={ticket.status} />

          <div className="flex-grow flex justify-end gap-4">
            <UpdateTicket ticketId={ticket._id} />
            <DeleteTicket ticketId={ticket._id} />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TicketCard;
