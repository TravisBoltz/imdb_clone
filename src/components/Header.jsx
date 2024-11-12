import React from "react";
import MenuItem from "../components/MenuItem";
import { FaHome } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";

export default function Header() {
  return (
    <section className="flex justify-between items-center p-3 sm:w-6xl dark:bg-[#121212] mx-auto">
      <div className="flex gap-4">
        <MenuItem title="Home" address="/" Icon={FaHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href="/">
          <div className="flex gap-1 items-center">
            <span className="bg-main font-bold text-gray-900 py-1 px-2 rounded ">IMBb</span>
            <span className="font-semibold">Clone</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
