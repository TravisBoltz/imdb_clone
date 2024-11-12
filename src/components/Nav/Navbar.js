import React from "react";
import NavbarItem from "../Nav/NavbarItem";
export default function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-200  lg:text-lg p-4 gap-4 justify-center">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
