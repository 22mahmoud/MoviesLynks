import React from "react";
import { Box } from "rebass";

import MoviesHorizontalList from "../components/Movie/MoviesHorizontalList";

export default function Home() {
  return (
    <>
      <MoviesHorizontalList
        url="/movie/popular"
        title="Popular Movies"
        emoji={`🍿`}
        ariaLabel="popcorn"
      />
      <Box mt={[3, 4, 5]} />
      <MoviesHorizontalList
        url="/movie/top_rated"
        title="Top Movies"
        emoji={`🔥`}
        ariaLabel="hot"
      />
    </>
  );
}
