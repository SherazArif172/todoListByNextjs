import React from "react";

const editTopic = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="add topic"
          className="border border-black w-full px-5 mt-4 py-4 rounded-md"
        />
        <input
          type="text"
          placeholder="add topic"
          className="border border-black w-full px-5 mt-4 py-4 rounded-md"
        />
        <button className="mt-4 py-4 bg-green-900 text-white w-full font-bold rounded-md hover:bg-green-800">
          Update Topic
        </button>
      </form>
    </div>
  );
};

export default editTopic;
