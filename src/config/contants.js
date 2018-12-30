require("dotenv").config();

export const MOVIE_DB_API = {
  KEY: process.env.REACT_APP_MOVIE_DB_API_KEY,
  BASE_URL: "https://api.themoviedb.org/3"
};

export const ROUTES = {
  HOME: "/",
  SIGN_UP: "/signup",
  LOG_IN: "/login"
};

export const THEME = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: [300, 400, 700],
  colors: {
    blue: "#07c",
    lightgray: "#f6f6ff"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  breakpoints: [640, 768, 1024]
};
