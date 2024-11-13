"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSumbit = (e) => {
  e.preventDefault();
  router.push(`/search/${search}`);
  };
  return (
    <form
      onSubmit={handleSumbit}
      className="flex justify-center border border-sm rounded-xl px-4 my-4 max-w-6xl mx-auto"
    >
      <input
        type="text"
        placeholder="Search for a movie...."
        className="w-full outline-none bg-transparent flex-1 h-14 rounded-md placeholder-gray-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-main disabled:text-gray-400 border-l-2  pl-2 my-2"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
}
