import React from "react";
import { Flex, Box, Heading, Text } from "rebass";

import MovieFavButton from "./MovieFavButton";
import { useFavMovie } from "../../context/favMovieContext";

export default function MovieDetailsInfo() {
  const {
    movie: { title, tagline, overview }
  } = useFavMovie();
  return (
    <Box>
      <Flex alignItems="center">
        <Heading fontSize={[3, 4, 6]}> {title} </Heading>
        <Box mr={["auto", "auto", 3]} />
        <MovieFavButton />
      </Flex>
      <Heading fontSize={[2, 3]} fontWeight={0} style={{ opacity: ".5" }}>
        {tagline}
      </Heading>
      <Text fontSize={2}> {overview}</Text>
    </Box>
  );
}
