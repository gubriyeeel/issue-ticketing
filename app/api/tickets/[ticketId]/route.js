import Ticket from "@/app/(models)/ticket";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { ticketId } = params;

    const ticket = await Ticket.findOne({ _id: ticketId });

    return NextResponse.json({ ticket }, { status: 200 });
  } catch(error) {
    return NextResponse.json({ message: "[GET]", error }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { ticketId } = params;
    await Ticket.findByIdAndDelete(ticketId);

    return NextResponse.json({ message: "[DELETE] TICKET DELETED" }, { status: 200 });
  } catch(error) {
    return NextResponse.json({ message: "[DELETE]", error }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { ticketId } = params;
    const body = await request.json();
    const ticketData = body;

    const updateTicketData = await Ticket.findByIdAndUpdate(ticketId, {
      ...ticketData,
    });

    return NextResponse.json(
      { message: "[PUT] TICKET UPDATED" },
      { status: 200 }
    );
  
  } catch (error) {
    return NextResponse.json({ message: "[PUT]", error }, { status: 500 });
  }
}

