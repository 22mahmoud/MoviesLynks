import React from "react";
import { Helmet } from "react-helmet";
import { Link as RouterLink } from "react-router-dom";
import { Card, Text, Box, Button, Heading, Link } from "rebass";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { Input } from "../ui/Form";

export default function Signup() {
  return (
    <Box px={[2, 4, 6]}>
      <Helmet title="Movies Lynks | Signup" />
      <Box mt={5} />
      <Heading fontSize={[3, 4]} textAlign="center" mb={4}>
        First, create an MoviesLynks account.
      </Heading>
      <Card
        bg="cornflower"
        borderRadius={6}
        p={3}
        m="0 auto"
        boxShadow=""
        style={{ maxWidth: "800px" }}
      >
        <Heading fontSize={[3, 4]} pb={2}>
          Signup
        </Heading>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, actions) => {
            console.log(values);
            // MyImaginaryRestApiCall(user.id, values).then(
            //   updatedUser => {
            //     actions.setSubmitting(false);
            //     updateUser(updatedUser);
            //     onClose();
            //   },
            //   error => {
            // actions.setSubmitting(false);
            // actions.setErrors(transformMyRestApiErrorsToAnObject(error));
            // actions.setStatus({ msg: "Set some arbitrary status or data" });
          }}
        >
          {() => (
            <Form>
              <Box>
                <Text as="label" fontSize={[2, 3]}>
                  Email
                </Text>

                <Input
                  as={Field}
                  fontSize={[2, 3]}
                  name="email"
                  p={2}
                  borderRadius={5}
                  border={2}
                  color="darkblue"
                  borderColor="lightBlue"
                  placeholderColor="lightBlue"
                  placeholder="youremail@example.com"
                  type="email"
                />
              </Box>
              <Box mt={4} />
              <Box>
                <Text as="label" fontSize={[2, 3]}>
                  password
                </Text>
                <Input
                  as={Field}
                  name="password"
                  type="password"
                  fontSize={[2, 3]}
                  p={2}
                  color="darkblue"
                  borderRadius={5}
                  border={2}
                  borderColor="lightBlue"
                  placeholderColor="lightBlue"
                  placeholder="Your password"
                />
              </Box>
              <Button variant="primary" mt={4} type="submit">
                Create Account
              </Button>
            </Form>
          )}
        </Formik>

        <Box mx="auto" mt={4} style={{ textAlign: "center" }}>
          <Text>
            Have an account?{" "}
            <Link as={RouterLink} to="/login" color="white">
              Sign in
            </Link>
          </Text>
        </Box>
      </Card>
    </Box>
  );
}
