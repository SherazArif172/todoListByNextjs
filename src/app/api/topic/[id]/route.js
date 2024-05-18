import connectDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await req.json();
  await connectDb();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json(
    { message: "topic has been updated" },
    { status: 200 }
  );
}
