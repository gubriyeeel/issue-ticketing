import TicketCard from "@/components/ticket-card";

const getTickets = async () => {
  try {
    const response = await fetch("http://basic-issue-ticketing.vercel.app/api/tickets", {
      cache: "no-store",
    });

    return await response.json();
  } catch (error) {
    console.log("Failed to fetch tickets", error);
  }
};

export default async function Home() {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <main className="p-4 flex flex-col gap-6">
      {tickets &&
        uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-xl capitalize mb-4">{uniqueCategory}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">


              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((ticket) => (
                  <TicketCard key={ticket._id} ticket={ticket} />
                ))}
            </div>
          </div>
        ))}
    </main>
  );
}
