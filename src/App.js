import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import { Box } from "rebass";

import { ROUTES, THEME } from "./config/constants";

import FirebaseProvider from "./config/firebase";
import FavMovieProvider from "./context/favMovieContext";
import AuthUserProvider from "./context/authUserContext";

import Header from "./components/Header";
import Spinner from "./ui/Spinner";

// Pages
const HomePage = lazy(() => import("./pages/Home"));
const LoginPage = lazy(() => import("./pages/Login"));
const SignupPage = lazy(() => import("./pages/Signup"));
const SearchResultsPage = lazy(() => import("./pages/SearchResults"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetails"));
const MyFavouritesPage = lazy(() => import("./pages/MyFavourites"));

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
  *, **, html, body {
    box-sizing: border-box;
  }

  html, body {
    font-size: 18px;
    line-height: 1.6;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    padding: 0;
    margin: 0;
    height: 100vh;
    color: #fff;
    background-color: #26283f;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  input {
    -webkit-appearance: none;
  }
`;

function Providers({ children }) {
  return (
    <ThemeProvider theme={THEME}>
      <FirebaseProvider>
        <AuthUserProvider>
          <FavMovieProvider>{children}</FavMovieProvider>
        </AuthUserProvider>
      </FirebaseProvider>
    </ThemeProvider>
  );
}

function App() {
  return (
    <Providers>
      <GlobalStyle />
      <Helmet title="Movies Lynks" />
      <Suspense fallback={<Spinner />}>
        <Router>
          <Switch>
            <Route
              exact
              path={ROUTES.SIGN_UP}
              render={props => <SignupPage {...props} />}
            />
            <Route
              exact
              path={ROUTES.LOG_IN}
              render={props => <LoginPage {...props} />}
            />
            <Route
              path="/"
              render={() => (
                <>
                  <Header />
                  <Box px={[2, 4, 6]}>
                    <Route
                      exact
                      path={ROUTES.HOME}
                      render={props => <HomePage {...props} />}
                    />
                    <Route
                      path={ROUTES.SEARCH_RESULTS}
                      render={props => <SearchResultsPage {...props} />}
                    />
                    <Route
                      path={ROUTES.MOVIE_DETAILS}
                      render={props => <MovieDetailsPage {...props} />}
                    />
                    <Route
                      path={ROUTES.MY_FAV}
                      render={props => <MyFavouritesPage {...props} />}
                    />
                  </Box>
                </>
              )}
            />
          </Switch>
        </Router>
      </Suspense>
    </Providers>
  );
}

export default App;
