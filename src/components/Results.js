import React from "react";

export default function Results({ results }) {
  return (
    <div>
      {results.map((result) => {
        return (
          <div key={result.id}>
            <h3>{result.original_title}</h3>
          </div>
        );
      })}
    </div>
  );
}
