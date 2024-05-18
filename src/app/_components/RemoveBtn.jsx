import React from "react";
import { Trash2 } from "lucide-react";

const RemoveBtn = () => {
  return (
    <div>
      <button className="text-red-700">
        <Trash2 />
      </button>
    </div>
  );
};

export default RemoveBtn;
