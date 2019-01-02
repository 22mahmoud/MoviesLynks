import React, { useState, useEffect } from "react";
import { Flex } from "rebass";

import { useFirebase } from "../config/firebase";
import MoviesGridList from "../components/Movie/MoviesGridList";
import Spinner from "../ui/Spinner";

export default function MyFavourites({ history }) {
  const fb = useFirebase();
  const user = JSON.parse(localStorage.getItem("user"));

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const res = await fb.myFavMovies(user.uid);
    let _movies = [];
    res.forEach(doc => {
      const { poster_path, vote_average, movie: id } = doc.data();
      _movies.push({ poster_path, vote_average, id });
    });

    setMovies(_movies);
    setIsLoading(false);
  };

  useEffect(() => {
    if (user) {
      getMovies();
    } else {
      history.push("/login");
    }
  }, []);

  if (isLoading) {
    return (
      <Flex alignItems="center" justifyContent="center" style={{ height: 320 }}>
        <Spinner />
      </Flex>
    );
  }

  return (
    <MoviesGridList
      data={movies}
      title="My Favourites"
      emoji={`⭐`}
      ariaLabel="star"
    />
  );
}
