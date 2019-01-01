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

export default function MovieDetails({ match }) {
  const { id } = match.params;
  const { data, isLoading, isError, GET } = useFetchApi(`/movie/${id}`);
  const prevMovieId = usePrevious({ id });

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

  const { poster_path, vote_average, genres, title, tagline, overview } = data;
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
          <MovieGenres genres={genres} />
          <MovieDetailsInfo
            title={title}
            tagline={tagline}
            overview={overview}
          />
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
