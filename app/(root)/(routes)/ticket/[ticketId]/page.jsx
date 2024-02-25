import TicketForm from "@/components/ticket-form";

const getTicketById = async (ticketId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/tickets/${ticketId}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch ticket!");
    }

    return response.json();
  } catch (error) {
    console.log(["[UPDATE]", error]);
  }
};

const TicketPage = async ({ params }) => {
  const editMode = params.ticketId === "new" ? false : true;

  let updatedTicketData = {};

  if (editMode) {
    updatedTicketData = await getTicketById(params.ticketId);
    updatedTicketData = updatedTicketData.ticket;
  } else {
    updatedTicketData = {
      _id: "new",
    };
  }

  return (
    <div className="grid place-items-center p-4">
      <TicketForm ticket={updatedTicketData} />
    </div>
  );
};

export default TicketPage;
