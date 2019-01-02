import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Flex } from "rebass";

import MoviesGridList from "../components/Movie/MoviesGridList";
import useFetchApi from "../utils/useFetchApi";
import usePrevious from "../utils/usePrevious";
import Spinner from "../ui/Spinner";

export default function SearchResults({ match }) {
  const { query } = match.params;
  const [pageNumber, setPageNumber] = useState(2);
  const { data, isLoading, GET, fetchMore } = useFetchApi("/search/movie", {
    query
  });
  const prevApiInfo = usePrevious({ query });
  const prevPage = usePrevious({ pageNumber: pageNumber - 1 });

  useEffect(
    () => {
      if (prevApiInfo) {
        if (prevApiInfo.query !== query) {
          GET("/search/movie", { query });
        }
      }
    },
    [prevApiInfo]
  );

  useEffect(
    () => {
      window.addEventListener("scroll", handlOnScroll, false);

      // Clean up
      return () => window.removeEventListener("scroll", handlOnScroll, false);
    },
    [prevPage]
  );

  const handlOnScroll = async () => {
    if (
      window.scrollY + window.innerHeight >= document.body.scrollHeight - 500 &&
      pageNumber <= data.total_pages
    ) {
      setPageNumber(pageNumber + 1);
      if (prevPage && prevPage.pageNumber !== pageNumber) {
        await fetchMore({
          query,
          page: pageNumber
        });
      }
    }
  };

  if (isLoading && !data.results) {
    return (
      <Flex alignItems="center" justifyContent="center" style={{ height: 320 }}>
        <Spinner />
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
