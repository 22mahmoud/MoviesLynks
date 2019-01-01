import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Text, Box, Button, Link } from "rebass";
import { Formik, Field, Form } from "formik";

import loginSchema from "../utils/loginSchema";
import { FormInput } from "../ui/Form";
import { useFirebase } from "../config/firebase";
import Layout from "../components/AuthForm/Layout";

export default function Login({ history }) {
  const fb = useFirebase();
  const [fbErrorMsg, setfbErrorMsg] = useState("");

  return (
    <Layout title="Login">
      <Layout.Heading> Sign in to your MoviesLynks account.</Layout.Heading>
      <Layout.Card title="Login">
        <Formik
          validationSchema={loginSchema()}
          initialValues={{ email: "", password: "" }}
          onSubmit={async ({ email, password }, actions) => {
            actions.setSubmitting(true);
            setfbErrorMsg("");
            try {
              await fb.login({ email, password });
              actions.setSubmitting(false);
              actions.resetForm();
              history.push("/");
            } catch (error) {
              console.log(error);
              setfbErrorMsg(error.message);
              actions.setSubmitting(false);
            }
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              {fbErrorMsg && (
                <Text fontWeight={0} fontSize={[2, 3]} color="tomato">
                  {fbErrorMsg}
                </Text>
              )}
              <FormInput
                error={errors.email}
                touched={touched.email}
                as={Field}
                label="Email"
                name="email"
                placeholder="youremail@example.com"
                type="email"
              />
              <Box mt={4} />
              <FormInput
                error={errors.password}
                touched={touched.password}
                as={Field}
                name="password"
                type="password"
                placeholder="Your password"
                label="Password"
              />
              <Button
                variant={isSubmitting ? "disabled" : "primary"}
                disabled={!!isSubmitting}
                mt={4}
                type="submit"
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>

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
