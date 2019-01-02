import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import { Box } from "rebass";

import FirebaseProvider from "./config/firebase";
import { ROUTES, THEME } from "./config/contants";
import AuthUserProvider from "./context/authUserContext";

import Header from "./components/Header";

// Pages
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import SearchResultsPage from "./pages/SearchResults";
import MovieDetailsPage from "./pages/MovieDetails";
import MyFavourites from "./pages/MyFavourites";
import FavMovieProvider from "./context/favMovieContext";

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
      <Router>
        <Switch>
          <Route exact path={ROUTES.SIGN_UP} component={SignupPage} />
          <Route exact path={ROUTES.LOG_IN} component={LoginPage} />
          <Route
            path="/"
            render={() => (
              <>
                <Header />
                <Box px={[2, 4, 6]}>
                  <Route exact path={ROUTES.HOME} render={HomePage} />
                  <Route
                    path={ROUTES.SEARCH_RESULTS}
                    component={SearchResultsPage}
                  />
                  <Route
                    path={ROUTES.MOVIE_DETAILS}
                    component={MovieDetailsPage}
                  />
                  <Route path={ROUTES.MY_FAV} component={MyFavourites} />
                </Box>
              </>
            )}
          />
        </Switch>
      </Router>
    </Providers>
  );
}

export default App;
