import React from "react";
import Results from '../components/Results';
import axios from "axios";
const API_KEY = process.env.API_KEY;
interface SearchParams {
  genre?: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const genre = params.genre || "fetchTrending";
  const res = await axios.get(
    `https://api.themoviedb.org/3${
      genre == "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}`
  );
  const data = res.data;
  const results = data.results;
  // console.log(results)
  return <div>
    <Results results={results}/>
  </div>;
}
