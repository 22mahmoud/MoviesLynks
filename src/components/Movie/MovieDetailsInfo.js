import React from "react";
import { Flex, Box, Heading, Text } from "rebass";

import MovieFavButton from "./MovieFavButton";

export default function MovieDetailsInfo({ title, tagline, overview, id }) {
  return (
    <Box>
      <Flex alignItems="center">
        <Heading fontSize={[3, 4, 6]}> {title} </Heading>
        <Box mr={[2, 3]} />
        <MovieFavButton movieId={id} />
      </Flex>
      <Heading fontSize={[2, 3]} fontWeight={0} style={{ opacity: ".5" }}>
        {tagline}
      </Heading>
      <Text fontSize={2}> {overview}</Text>
    </Box>
  );
}
