import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Text, Link } from "rebass";

import Layout from "../components/AuthForm/Layout";
import AuthForm from "../components/AuthForm/AuthForm";

export default function Signup({ history }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    history.push("/");
  }
  return (
    <Layout title="Signup">
      <Layout.Heading>First, create an MoviesLynks account.</Layout.Heading>
      <Layout.Card title="Signup">
        <AuthForm type="signup" />
        <Layout.Footer>
          <Text>
            Have an account?{" "}
            <Link as={RouterLink} to="/login" color="white">
              Sign in
            </Link>
          </Text>
        </Layout.Footer>
      </Layout.Card>
    </Layout>
  );
}
