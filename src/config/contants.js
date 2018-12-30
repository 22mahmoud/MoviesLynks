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
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  colors: {
    blue: "#07c",
    lightgray: "#f6f6ff"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  breakpoints: [640, 768, 1024]

  // fonts: {
  //   sans: "system-ui, sans-serif",
  //   mono: "Menlo, monospace"
  // },
  // shadows: {
  //   small: "0 0 4px rgba(0, 0, 0, .125)",
  //   large: "0 0 24px rgba(0, 0, 0, .125)"
  // }
};
