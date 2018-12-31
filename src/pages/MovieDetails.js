import React from "react";
import { Helmet } from "react-helmet";
import { Box, Heading, Text, Image, Flex } from "rebass";

import useFetchApi from "../utils/useFetchApi";
export default function MovieDetails({ match }) {
  const { id } = match.params;
  const { data, isLoading, isError } = useFetchApi(`/movie/${id}`);
  console.log("DATA", data);
  if (isLoading) {
    return null;
  }

  if (isError) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Movies Lynks | Movie</title>
      </Helmet>
      <Flex flexDirection="row">
        <Box>
          <Image src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} />
        </Box>
        <Box>
          <Heading fontSize={[3, 6]}> {data.title} </Heading>
          <Heading fontSize={[2, 3]} fontWeight={0}>
            {data.tagline}
          </Heading>
          <Text fontSize={2}> {data.overview}</Text>
        </Box>
      </Flex>
    </>
  );
}
