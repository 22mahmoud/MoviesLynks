import React, { useState } from "react";
import { Card, Flex, Button } from "rebass";
import styled, { css } from "styled-components";

import { Relative, Absolute } from "../../ui/position";
import { Link } from "../../ui/Link";
import MovieStars from "./MovieStars";
import MovieRating from "./MovieRating";

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
  transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  z-index: 55;
`;

const MovieCardWrapper = styled(Card)`
  transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  position: relative;
  ${({ isHoverd }) =>
    isHoverd &&
    css`
      filter: blur(2px) opacity(0.1);
    `};
  height: 100%;
`;

export default function MovieCard({ movie }) {
  const [isHoverd, setIsHoverd] = useState(false);

  const toggleHover = () => setIsHoverd(!isHoverd);

  return (
    <Wrapper
      isHoverd={isHoverd}
      onMouseOver={toggleHover}
      onMouseOut={toggleHover}
      as={Relative}
      py={3}
      m={1}
    >
      <Details isHoverd={isHoverd} as={Link} to={`/movie/${movie.id}`}>
        <Flex
          style={{ height: "100%" }}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <MovieStars voteAverage={movie.vote_average} />
          <MovieRating voteAverage={movie.vote_average} />
          <Button variant="primary" mt={4} as={Link} to={`/movie/${movie.id}`}>
            View
          </Button>
        </Flex>
      </Details>
      <MovieCardWrapper
        boxShadow="0 2px 25px rgba(103,138,222, 0.4)"
        isHoverd={isHoverd}
        backgroundImage={
          movie.poster_path
            ? `url(https://image.tmdb.org/t/p/w200/${movie.poster_path})`
            : "url(https://via.placeholder.com/200x320?text=No%20Image)"
        }
        backgroundSize="cover"
        borderRadius={5}
        backgroundPosition="center"
      />
    </Wrapper>
  );
}
