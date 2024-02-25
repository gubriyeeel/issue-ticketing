import Ticket from "@/app/(models)/ticket";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const ticketData = await request.json();

    await Ticket.create(ticketData);

    return NextResponse.json(
      { message: "[POST] TICKET CREATED" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "[POST]", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.find();

    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "[GET]", error }, { status: 500 });
  }
}