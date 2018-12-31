require("dotenv").config();

export const MOVIE_DB_API = {
  KEY: process.env.REACT_APP_MOVIE_DB_API_KEY,
  BASE_URL: "https://api.themoviedb.org/3"
};

export const ROUTES = {
  HOME: "/",
  SIGN_UP: "/signup",
  LOG_IN: "/login",
  SEARCH_RESULTS: "/search/:query",
  MOVIE_DETAILS: "/movie/:id"
};

export const THEME = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: [300, 400, 700],
  colors: {
    blue: "#07c",
    lightgray: "#f6f6ff",
    lightBlue: "#678ade",
    cornflower: "#383759",
    darkBlue: "#26283f"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  breakpoints: ["40em", "52em", "64em"],
  buttons: {
    primary: {
      color: "#fff",
      backgroundColor: "#678ade",
      borderRadius: 24,
      paddingLeft: 24,
      paddingRight: 24,
      boxShadow: "0 2px 16px rgba(103,138,222, 0.4)",
      cursor: "pointer"
    }
  },
  shadows: { light: "0 2px 16px rgba(103,138,222, 0.4)" }
};
