import React from "react";
import { Flex, Box, Heading } from "rebass";

import MovieCard from "./MovieCard";

export default function MoviesGridList({ data, emoji, title, ariaLabel }) {
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
        {data.map(movie => (
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
