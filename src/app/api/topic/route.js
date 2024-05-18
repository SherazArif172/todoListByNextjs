import connectDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    await connectDb();
    await Topic.create({ title, description });
    return NextResponse.json(
      { message: "topic created", success: true },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "not connected", success: false },
      { status: 201 }
    );
  }
}
export async function GET(request) {
  try {
    await connectDb();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "unable to get", success: false },
      { status: 201 }
    );
  }
}
export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  console.log(id);
  await connectDb();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "deleted successfuly" }, { status: 200 });
}


