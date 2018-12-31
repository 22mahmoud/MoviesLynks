import React from "react";
import { Helmet } from "react-helmet";

import MoviesGridList from "../components/Movie/MoviesGridList";

export default function SearchResults({ match }) {
  const { query } = match.params;

  return (
    <>
      <Helmet>
        <title>Movies Lynks | Results</title>
      </Helmet>
      <MoviesGridList
        url={`/search/movie`}
        opt={{ query }}
        title="Search Results"
        emoji={`🍿`}
        ariaLabel="popcorn"
      />
    </>
  );
}
