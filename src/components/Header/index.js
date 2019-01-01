import React from "react";
import { Text, Flex, Box, Heading, Button } from "rebass";
import { withRouter } from "react-router-dom";

import { Link } from "../../ui/Link";
import { Badge } from "../../ui/Badge";
import { DropDown } from "../../ui/dorpDown";
import SearchForm from "./SearchForm";
import { useAuthUser } from "../../context/authUserContext";
import { useFirebase } from "../../config/firebase";

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
            <Heading> MobvieLynks </Heading>
          </Link>
        </Box>
        <Box>
          <>
            {loading ? (
              "Loading .."
            ) : user ? (
              <Flex alignItems="center">
                {/* //<Box mr={[3, 4]} /> */}
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
                  <DropDown.Menu bg="darkBlue">
                    <DropDown.Item>
                      <Link to="/favourites"> My favourites </Link>
                    </DropDown.Item>
                    <DropDown.Item>
                      <Button
                        variant="link"
                        onClick={() => {
                          fb.signout();
                          history.push("/");
                        }}
                      >
                        {" "}
                        Logout{" "}
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
