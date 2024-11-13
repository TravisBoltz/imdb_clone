import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
export default function Card({ result }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-300 ">
      <Link href={`/movie/${result.id}`}>
        <Image
          width={500}
          height={300}
          alt={"image"}
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path || "spinner.svg"
          }`}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-400"
        ></Image>
        <div className="p-3">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center font-semibold gap-2">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="text-main" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
