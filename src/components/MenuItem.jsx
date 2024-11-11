import React from "react";
import Link from "next/link";
export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className="hover:text-main">
      <Icon className="text-2xl  sm:hidden" />

      <p className="uppercase hidden font-semibold sm:inline text-sm  ">{title}</p>
    </Link>
  );
}
