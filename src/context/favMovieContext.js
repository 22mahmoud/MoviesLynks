import React, { useContext, useState } from "react";

const FavMovieContext = React.createContext(null);

export const useFavMovie = () => useContext(FavMovieContext);

export default function FavMovieProvider({ children }) {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [movie, setMovie] = useState(true);

  const ctx = {
    currentUser,
    movie,
    setMovie
  };

  return (
    <FavMovieContext.Provider value={ctx}>{children}</FavMovieContext.Provider>
  );
}
