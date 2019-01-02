import React from "react";
import styled from "styled-components";
import { Flex, Box, Heading, Button } from "rebass";
import { LeftArrow } from "styled-icons/boxicons-solid/LeftArrow";
import { RightArrow } from "styled-icons/boxicons-solid/RightArrow";

import useFetchApi from "../../utils/useFetchApi";
import Spinner from "../../ui/Spinner";
import MovieCard from "./MovieCard";

const Wrapper = styled(Flex)`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
`;

export default function MoviesList({ url, emoji, title, ariaLabel, opt = {} }) {
  let wrapperRef = React.createRef();
  const { data, isLoading, isError } = useFetchApi(url, opt);

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
        <Spinner />
      </Flex>
    );
  }
  return data.results.length > 1 ? (
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
            <LeftArrow color="white" size={24} />
          </Button>
          <Button
            onClick={() => handleScroll("RIGHT")}
            mr={3}
            bg="transparent"
            style={{ cursor: "pointer" }}
          >
            <RightArrow color="white" size={24} />
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
  ) : null;
}
