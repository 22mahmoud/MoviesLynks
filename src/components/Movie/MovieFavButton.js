import React, { useState, useEffect } from "react";
import { Button } from "rebass";
import { withRouter } from "react-router-dom";
import { FavoriteBorder } from "styled-icons/material/FavoriteBorder";
import { Favorite } from "styled-icons/material/Favorite";

import { useFirebase } from "../../config/firebase";

function MovieFavButton({ movieId, history }) {
  const fb = useFirebase();
  const [loading, setLoading] = useState(true);
  const [isFav, setIsFav] = useState(false);

  const user = JSON.parse(localStorage.getItem("user")) || null;

  const checkIsMovieAlreadyFav = async () => {
    setLoading(true);
    const res = await fb.isFav(user.uid, movieId);
    setIsFav(res);
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      checkIsMovieAlreadyFav();
    } else {
      setLoading(false);
    }
  }, []);

  if (isFav) {
    return (
      <Button
        disabled={loading}
        variant={loading ? "disabled" : "primary"}
        onClick={async () => {
          // setLoading(true);
          // await fb.favMovie(uid, movieId);
          // setLoading(false);
        }}
      >
        <Favorite size={26} color="white" />
      </Button>
    );
  }

  return (
    <Button
      disabled={loading}
      variant={loading ? "disabled" : "outline"}
      onClick={async () => {
        setLoading(true);
        if (user) {
          await fb.favMovie(user.uid, movieId);
          setLoading(false);
          setIsFav(true);
        } else {
          history.push("/login");
        }
      }}
    >
      <FavoriteBorder size={26} color="white" />
    </Button>
  );
}

export default withRouter(MovieFavButton);
