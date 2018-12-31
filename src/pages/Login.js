import React from "react";
import { Helmet } from "react-helmet";
import { Link as RouterLink } from "react-router-dom";
import { Card, Text, Box, Button, Heading, Link } from "rebass";

import { Input } from "../ui/Form";

export default function Login() {
  return (
    <Box px={[2, 4, 6]}>
      <Helmet title="Movies Lynks | Login" />
      <Box mt={5} />
      <Heading fontSize={[3, 4]} textAlign="center" mb={4}>
        Sign in to your MoviesLynks account.
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
          Login
        </Heading>
        <Box>
          <Text as="label" fontSize={[2, 3]}>
            Email
          </Text>
          <Input
            fontSize={[2, 3]}
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
            Email
          </Text>
          <Input
            type="password"
            fontSize={[2, 3]}
            p={2}
            color="darkblue"
            borderRadius={5}
            // icon={<SearchAlt size={24} color={"#678ade"} />}
            border={2}
            borderColor="lightBlue"
            placeholderColor="lightBlue"
            placeholder="Your password"
          />
        </Box>
        <Button variant="primary" mt={4} type="submit">
          Login
        </Button>
        <Box mx="auto" mt={4} style={{ textAlign: "center" }}>
          <Text>
            Need to create an account?
            <Link as={RouterLink} to="/signup" color="white">
              Sign up
            </Link>
          </Text>
        </Box>
      </Card>
    </Box>
  );
}
