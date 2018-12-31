import React from "react";
import { Flex, Box, Heading } from "rebass";

import { Link } from "../../ui/Link";
import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <Box py={[3, 4]} px={[2, 4, 6]} mb={[3, 5]} bg="cornflower">
      <Flex
        mb={3}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Link to="/">
            <Heading> MobvieLynks </Heading>
          </Link>
        </Box>

        <Box>
          <Link to="/login" pr={3}>
            Login
          </Link>
          <Link to="/signup">Sign up</Link>
        </Box>
      </Flex>

      <SearchForm />
    </Box>
  );
}
