import React from "react";
import Results from "../../../components/Results";

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;

  // Fetch movie data using fetch API
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}`
  );

  // Check if the request was successful
  if (!res.ok) {
    // Handle error, e.g., show an error message or return empty results
    return <h1 className="text-center pt-6">Error fetching results</h1>;
  }

  // Parse the response JSON
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results.length === 0 ? (
        <h1 className="text-center pt-6">No results found</h1>
      ) : (
        <Results results={results} />
      )}
    </div>
  );
}
