import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Text, Link } from "rebass";

import Layout from "../components/AuthForm/Layout";
import AuthForm from "../components/AuthForm/AuthForm";

export default function Login({ history }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    history.push("/");
  }
  return (
    <Layout title="Login">
      <Layout.Heading> Sign in to your MoviesLynks account.</Layout.Heading>
      <Layout.Card title="Login">
        <AuthForm type="login" />
        <Layout.Footer>
          <Text>
            Need to create an account?
            <Link as={RouterLink} to="/signup" color="white">
              Sign up
            </Link>
          </Text>
        </Layout.Footer>
      </Layout.Card>
    </Layout>
  );
}
