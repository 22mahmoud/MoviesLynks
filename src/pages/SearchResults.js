import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Flex } from "rebass";

import MoviesGridList from "../components/Movie/MoviesGridList";
import useFetchApi from "../utils/useFetchApi";
import usePrevious from "../utils/usePrevious";

export default function SearchResults({ match }) {
  const { query } = match.params;
  const { data, isLoading, GET } = useFetchApi("/search/movie", { query });

  const prevApiInfo = usePrevious({ query });

  useEffect(
    () => {
      if (prevApiInfo) {
        console.log(prevApiInfo, "PREV");
        if (prevApiInfo.query !== query) {
          GET("/search/movie", { query });
        }
      }
    },
    [prevApiInfo]
  );

  if (isLoading) {
    return (
      <Flex alignItems="center" justifyContent="center" style={{ height: 320 }}>
        Loading...
      </Flex>
    );
  }

  return (
    <>
      <Helmet title="Movies Lynks | Results" />
      <MoviesGridList
        data={data.results}
        title="Search Results"
        emoji={`🍿`}
        ariaLabel="popcorn"
      />
    </>
  );
}
