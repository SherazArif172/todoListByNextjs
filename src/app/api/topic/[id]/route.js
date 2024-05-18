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

export async function GET(req, { params }) {
  const { id } = params;
  await connectDb();
  const topic = await Topic.find({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
