import React from "react";
import { Flex } from "rebass";
import { Star } from "styled-icons/boxicons-solid/Star";
import { StarHalf } from "styled-icons/boxicons-solid/StarHalf";

export default function MovieStars({ voteAverage }) {
  return (
    <Flex>
      {Array.from({ length: Math.floor(voteAverage * 0.5) }).map((_, i) => (
        <Star key={i} size={24} color="white" />
      ))}{" "}
      {!String(voteAverage).split(".")[1] < 5 && (
        <StarHalf size={24} color="white" />
      )}
    </Flex>
  );
}
