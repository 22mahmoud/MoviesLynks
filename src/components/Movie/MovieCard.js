import React from "react";
import { Box } from "rebass";

export default function MovieCard({ movie }) {
  return (
    <Box
      p={1}
      style={{
        flex: "0 0 auto"
      }}
    >
      <img
        alt={`${movie.title} Poster`}
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        style={{
          objectFit: "cover",
          height: 320,
          width: 200
        }}
      />
    </Box>
  );
}
