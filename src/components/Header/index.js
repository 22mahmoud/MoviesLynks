import React from "react";
import { Flex, Box, Heading, Link } from "rebass";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  return (
    <Flex py={2} px={[1, 4]} alignItems="center">
      <Box>
        <Link as={RouterLink} to="/">
          <Heading> MobvieLynks </Heading>
        </Link>
      </Box>
      <Box ml="auto">
        <Link as={RouterLink} to="/login" pr={2}>
          Login
        </Link>
        <Link as={RouterLink} to="/signup">
          Sign up
        </Link>
      </Box>
    </Flex>
  );
}
