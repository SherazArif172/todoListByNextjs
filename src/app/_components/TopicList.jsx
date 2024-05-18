import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { FilePenLine } from "lucide-react";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topic", {
      cache: "no-cache",
    });
    // console.log(res);
    if (!res.ok) {
      throw new Error("failed to fetch");
    }

    return res.json();
  } catch (error) {
    console.log("data not fetched", error);
  }
};

const TopicList = async () => {
  const { topics } = await getData();

  return (
    <div>
      {topics.map((t) => (
        <div
          key={t._id}
          className="flex justify-between gap-6 p-4 border border-slate-300 my-6"
        >
          <div>
            <p className="text-2xl font-bold">{t.title}</p>
            <p className="mt-5">{t.description}</p>
          </div>
          <div className="flex gap-2 ">
            <RemoveBtn />
            <Link href={`/editTopic/${t._id}`}>
              {" "}
              <FilePenLine />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicList;
