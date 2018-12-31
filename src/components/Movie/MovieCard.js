import React, { useState } from "react";
import { Card, Text, Flex, Button } from "rebass";
import styled from "styled-components";

import { Relative, Absolute } from "../../ui/position";
import MovieStars from "./MovieStars";

const Wrapper = styled(Card)`
  cursor: pointer;
  flex: 0 0 auto;
  height: 320px;
  width: 200px;
`;

const Details = styled(Absolute)`
  display: ${({ isHoverd }) => (!isHoverd ? "none" : "block")};
  height: 100%;
  width: 100%;
  color: #fff;
  background: rgba(10, 8, 24, 0.8);
  transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  z-index: 55;
`;

const MovieCardWrapper = styled(Card)`
  transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  filter: ${({ isHoverd }) => (isHoverd ? " blur(2px)" : "blur(0px)")};
  height: 100%;
  width: 100%;
`;

export default function MovieCard({ movie }) {
  const [isHoverd, setIsHoverd] = useState(false);

  const toggleHover = () => setIsHoverd(!isHoverd);

  return (
    <Wrapper
      isHoverd={isHoverd}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      as={Relative}
      m={1}
    >
      <Details isHoverd={isHoverd}>
        <Flex
          style={{ height: "100%" }}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <MovieStars voteAverage={movie.vote_average} />
          <Text fontWeight={0}>
            <span style={{ fontWeight: 700 }}>
              {movie.vote_average} {` `}
            </span>
            / 10
          </Text>
          <Button variant="primary" mt={4}>
            View
          </Button>
        </Flex>
      </Details>
      <MovieCardWrapper
        isHoverd={isHoverd}
        backgroundImage={`url(https://image.tmdb.org/t/p/w200/${
          movie.poster_path
        })`}
        backgroundSize="cover"
        borderRadius={5}
        backgroundPosition="center"
      />
    </Wrapper>
  );
}
