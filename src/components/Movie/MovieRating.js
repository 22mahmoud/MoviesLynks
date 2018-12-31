import React from "react";
import { Text } from "rebass";

export default function MovieRating({ voteAverage }) {
  return (
    <Text fontWeight={0}>
      <span style={{ fontWeight: 700 }}>
        {voteAverage} {` `}
      </span>
      / 10
    </Text>
  );
}
