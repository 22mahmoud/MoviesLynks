import React from "react";
import styled from "styled-components";
import { Flex } from "rebass";

import useFetchApi from "../../utils/useFetchApi";
import MovieCard from "./MovieCard";

const Wrapper = styled(Flex)`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  height: 320;
`;

export default function MoviesList({ url }) {
  const { data, isError, isLoading } = useFetchApi(url);

  if (isLoading) {
    return (
      <Flex alignItems="center" justifyContent="center" style={{ height: 320 }}>
        Loading...
      </Flex>
    );
  }

  if (isError) {
    return `hhhhm, there is an error please try again 🤷‍♂️`;
  }

  console.log(data.results);
  return (
    <Wrapper flexDirection="row" alignItems="center" flexWrap="nowrap">
      {data.results.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Wrapper>
  );
}
