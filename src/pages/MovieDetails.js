import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Box, Flex, Image } from "rebass";

import MoviesHorizontalList from "../components/Movie/MoviesHorizontalList";
import MovieStars from "../components/Movie/MovieStars";
import useFetchApi from "../utils/useFetchApi";
import MovieGenres from "../components/Movie/MovieGenres";
import MovieDetailsInfo from "../components/Movie/MovieDetailsInfo";
import MovieRating from "../components/Movie/MovieRating";
import usePrevious from "../utils/usePrevious";
import { useFavMovie } from "../context/favMovieContext";

export default function MovieDetails({ match }) {
  const { id } = match.params;
  const { data, isLoading, isError, GET } = useFetchApi(`/movie/${id}`);
  const { setMovie } = useFavMovie();
  const prevMovieId = usePrevious({ id });

  useEffect(
    () => {
      if (data && data.id) {
        setMovie(data);
      }
    },
    [data]
  );

  useEffect(
    () => {
      if (prevMovieId) {
        if (prevMovieId.id !== id) {
          GET(`/movie/${id}`, {});
        }
      }
    },
    [prevMovieId]
  );

  if (isLoading) {
    return null;
  }

  if (isError) {
    return null;
  }

  const { poster_path, title, vote_average } = data;
  return (
    <>
      <Helmet title={title} />
      <Flex flexWrap="wrap">
        <Box>
          <Image src={`https://image.tmdb.org/t/p/w200/${poster_path}`} />
        </Box>

        <Box ml={[0, 4]} width={[1, 1 / 2]}>
          <MovieRating voteAverage={vote_average} />
          <MovieStars voteAverage={vote_average} />
          <MovieGenres />
          <MovieDetailsInfo />
        </Box>
      </Flex>
      <hr />
      <Box mt={5} />
      <MoviesHorizontalList
        url={`/movie/${id}/similar`}
        title="Similar Movies"
        emoji={`🎬`}
        ariaLabel="movie"
      />
    </>
  );
}
