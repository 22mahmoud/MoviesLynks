import React from "react";
import { Heading, Box } from "rebass";

import MoviesHorizontalList from "../../components/Movie/MoviesHorizontalList";

export default function Home() {
  return (
    <>
      <Box>
        <Heading fontSize={[3, 4]} pb={[0, 2]}>
          Popular Movies
          <span role="img" aria-label="popcorn">
            {" "}
            {`🍿`}
          </span>
        </Heading>
        <MoviesHorizontalList List url="/movie/popular" />
      </Box>
      <Box mt={[3, 4, 6]}>
        <Heading fontSize={[3, 4]} pb={[0, 2]}>
          Top Movies
          <span role="img" aria-label="hot">
            {" "}
            {`🔥`}
          </span>
        </Heading>
        <MoviesHorizontalList List url="/movie/top_rated" />
      </Box>
    </>
  );
}
