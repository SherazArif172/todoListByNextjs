import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-black text-white py-5 px-4 rounded-md">
      <h1 className="text-2xl font-bold self-center">
        <Link href={"/"}>Crude</Link>
      </h1>
      <button className="border border-white py-3 px-6 rounded-md hover:bg-slate-900">
        <Link href={"/addTopic"}>Add Topic</Link>
      </button>
    </nav>
  );
};

export default Navbar;
