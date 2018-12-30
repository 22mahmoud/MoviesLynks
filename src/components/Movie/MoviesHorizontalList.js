import React from "react";
import styled from "styled-components";
import { Flex, Box, Heading, Button } from "rebass";

import useFetchApi from "../../utils/useFetchApi";
import MovieCard from "./MovieCard";

const Wrapper = styled(Flex)`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
`;

export default function MoviesList({ url, emoji, title, ariaLabel }) {
  let wrapperRef = React.createRef();
  const { data, isLoading } = useFetchApi(url);

  const handleScroll = type => {
    if (wrapperRef.current) {
      switch (type) {
        case "LEFT":
          wrapperRef.current.scrollLeft -= 200;
          break;
        case "RIGHT":
          wrapperRef.current.scrollLeft += 200;
          break;
        default:
          break;
      }
    }
  };

  if (isLoading) {
    return (
      <Flex alignItems="center" justifyContent="center" style={{ height: 320 }}>
        Loading...
      </Flex>
    );
  }

  console.log(data.results);
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
        <Flex ml="auto">
          <Button
            style={{ cursor: "pointer" }}
            onClick={() => handleScroll("LEFT")}
            bg="transparent"
          >
            <span> {`👈`} </span>
          </Button>
          <Button
            onClick={() => handleScroll("RIGHT")}
            mr={3}
            bg="transparent"
            style={{ cursor: "pointer" }}
          >
            <span> {`👉`} </span>
          </Button>
        </Flex>
      </Flex>

      <Wrapper
        ref={wrapperRef}
        flexDirection="row"
        alignItems="center"
        flexWrap="nowrap"
      >
        {data.results.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Wrapper>
    </Box>
  );
}
