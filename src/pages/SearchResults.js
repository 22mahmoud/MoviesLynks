import React from "react";
import { Helmet } from "react-helmet";
import MoviesHorizontalList from "../components/Movie/MoviesHorizontalList";

export default function SearchResults({ match }) {
  const { query } = match.params;

  return (
    <>
      <Helmet>
        <title>Movies Lynks | Results</title>
      </Helmet>
      <MoviesHorizontalList
        url={`/search/movie`}
        opt={{ query }}
        title="Search Results"
        emoji={`🍿`}
        ariaLabel="popcorn"
      />
    </>
  );
}
