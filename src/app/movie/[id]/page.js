// app/movie/[id]/page.js
import React from "react";
import Image from "next/image";
import axios from "axios";

// The MoviePage function must be async to handle params correctly
export default async function MoviePage({ params }) {
  // Await the params and extract the id
  const { id } = await params;  // Awaiting params here

  // Fetch movie data using Axios
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const movie = res.data;

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center mx-auto max-w-6xl md:space-x-6">
        <Image
          width={500}
          height={300}
          alt={"Image"}
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path || "spinner.svg"
          }`}
          className="rounded-lg"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie.original_title}</h2>
          <p className="text-lg mb-3">{movie.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Ratings:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
