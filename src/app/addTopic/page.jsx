"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("nothing");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topic", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="add topic"
          className="border border-black w-full px-5 mt-4 py-4 rounded-md"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="add topic"
          className="border border-black w-full px-5 mt-4 py-4 rounded-md"
        />
        <button
          type="submit"
          className="mt-4 py-4 bg-green-900 text-white w-full font-bold rounded-md hover:bg-green-800"
        >
          ADD TOPIC
        </button>
      </form>
    </div>
  );
};

export default Page;
