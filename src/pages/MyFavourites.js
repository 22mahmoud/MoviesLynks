import React, { useState, useEffect } from "react";
import { useFirebase } from "../config/firebase";
import MoviesGridList from "../components/Movie/MoviesGridList";

export default function MyFavourites() {
  const fb = useFirebase();
  const user = JSON.parse(localStorage.getItem("user"));

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const res = await fb.myFavMovies(user.uid);
    let _movies = [];
    res.forEach(doc => {
      const { poster_path, vote_average, movie: id } = doc.data();
      _movies.push({ poster_path, vote_average, id });
    });

    setMovies(_movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MoviesGridList
      data={movies}
      title="My Favourites"
      emoji={`⭐`}
      ariaLabel="star"
    />
  );
}
