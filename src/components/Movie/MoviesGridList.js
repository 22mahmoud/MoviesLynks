import React, { useEffect } from "react";
import { Flex, Box, Heading } from "rebass";

import useFetchApi from "../../utils/useFetchApi";
import usePrevious from "../../utils/usePrevious";
import MovieCard from "./MovieCard";

export default function MoviesGridList({ url, emoji, title, ariaLabel, opt }) {
  const { data, isLoading, GET } = useFetchApi(url, opt);
  const prevApiInfo = usePrevious({ url, opt });

  useEffect(
    () => {
      if (prevApiInfo) {
        if (prevApiInfo.url !== url) {
          GET(url, opt);
        }
        if (prevApiInfo.opt !== opt) {
          GET(url, opt);
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
    <Box>
      <Flex alignItems="center">
        <Box>
          <Heading fontSize={[3, 4]} pb={[0, 2]}>
            {title}
            <span role="img" aria-label={ariaLabel}>
              {" "}
              {emoji}
            </span>
          </Heading>
        </Box>
      </Flex>

      <Flex flexWrap="wrap" justifyContent="center">
        {data.results.map(movie => (
          <Box
            key={movie.id}
            px={2}
            py={2}
            width={[1, 1 / 3, 1 / 5]}
            style={{ width: "auto" }}
          >
            <MovieCard movie={movie} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
