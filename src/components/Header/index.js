import React from "react";
import { Text, Flex, Box, Heading, Button } from "rebass";
import { withRouter } from "react-router-dom";

import { Link } from "../../ui/Link";
import { Badge } from "../../ui/Badge";
import { DropDown } from "../../ui/dorpDown";
import SearchForm from "./SearchForm";
import { useAuthUser } from "../../context/authUserContext";
import { useFirebase } from "../../config/firebase";
import Spinner from "../../ui/Spinner";

function Header({ history }) {
  const { user, loading } = useAuthUser();
  const fb = useFirebase();

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
            <Heading> MoviesLynks </Heading>
          </Link>
        </Box>
        <Box>
          <>
            {loading ? (
              <Spinner />
            ) : user ? (
              <Flex alignItems="center">
                <DropDown
                  header={
                    <Badge
                      boxShadow="0 2px 16px rgba(103,138,222, 0.4)"
                      bg="lightBlue"
                      justifyContent="center"
                      alignItems="center"
                      p={2}
                      borderRadius="50%"
                      style={{ height: 30, width: 30, cursor: "pointer" }}
                    >
                      {user.email[0].toUpperCase()}
                    </Badge>
                  }
                >
                  <DropDown.Menu
                    bg="darkBlue"
                    mt={2}
                    boxShadow={1}
                    borderRadius={6}
                    style={{ width: "14rem" }}
                  >
                    <DropDown.Item mt={2} mb={2}>
                      <Link to="/favourites">
                        <Text px={4} fontSize={2}>
                          My favourites
                        </Text>
                      </Link>
                    </DropDown.Item>
                    <DropDown.Item mb={2}>
                      <Button
                        variant="link"
                        onClick={() => {
                          fb.signout();
                          history.push("/");
                        }}
                      >
                        <Text px={4} fontSize={2}>
                          Logout
                        </Text>
                      </Button>
                    </DropDown.Item>
                  </DropDown.Menu>
                </DropDown>
              </Flex>
            ) : (
              <>
                <Link to="/login" pr={3}>
                  Login
                </Link>
                <Link to="/signup">Sign up</Link>
              </>
            )}
          </>
        </Box>
      </Flex>

      <SearchForm />
    </Box>
  );
}

export default withRouter(Header);
