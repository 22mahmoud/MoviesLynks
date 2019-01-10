require("dotenv").config();

export const MOVIE_DB_API = {
  KEY: process.env.REACT_APP_MOVIE_DB_API_KEY,
  BASE_URL: "https://api.themoviedb.org/3"
};

export const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

export const ROUTES = {
  HOME: "/",
  SIGN_UP: "/signup",
  LOG_IN: "/login",
  SEARCH_RESULTS: "/search/:query",
  MOVIE_DETAILS: "/movie/:id",
  MY_FAV: "/favourites"
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
    },
    outline: {
      color: "#fff",
      backgroundColor: "transparent ",
      borderRadius: 24,
      paddingLeft: 24,
      paddingRight: 24,
      border: "2px solid #678ade",
      boxShadow: "0 2px 16px rgba(103,138,222, 0.4)",
      cursor: "pointer"
    },
    disabled: {
      color: "rgba(0, 0, 0, .6)",
      backgroundColor: "rgba(220, 220, 220, 1)",
      borderRadius: 24,
      paddingLeft: 24,
      paddingRight: 24
    },
    link: {
      color: "#fff",
      backgroundColor: "transparent",
      padding: 0,
      cursor: "pointer"
    }
  },
  shadows: [
    "0 2px 16px rgba(103,138,222, 0.4)",
    "0 2px 16px rgba(19, 20, 30, .2)"
  ]
};
