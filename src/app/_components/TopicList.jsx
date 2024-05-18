import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { FilePenLine } from "lucide-react";

const TopicList = () => {
  return (
    <div className="flex justify-between gap-6 p-4 border border-slate-300 my-6">
      <div>
        <p className="text-2xl font-bold">title</p>
        <p className="mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
          nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat corrupti pariatur cum necessitatibus voluptatem labore in,
          quis velit modi impedit?
        </p>
      </div>
      <div className="flex gap-2 ">
        <RemoveBtn />
        <Link href={"/editTopic/123"}>
          {" "}
          <FilePenLine />
        </Link>
      </div>
    </div>
  );
};

export default TopicList;
