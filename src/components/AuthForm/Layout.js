import React from "react";
import { Helmet } from "react-helmet";
import { Card, Box, Heading } from "rebass";

export default function Layout({ title, children }) {
  return (
    <Box px={[2, 4, 6]}>
      <Helmet title={`Movies Lynks | ${title}`} />
      <Box mt={5} />
      {children}
    </Box>
  );
}

function _Heading({ children }) {
  return (
    <Heading fontSize={[3, 4]} textAlign="center" mb={4}>
      {children}
    </Heading>
  );
}

function _Card({ children, title }) {
  return (
    <Card
      bg="cornflower"
      borderRadius={6}
      p={3}
      m="0 auto"
      boxShadow=""
      style={{ maxWidth: "800px" }}
    >
      <Heading fontSize={[3, 4]} pb={2}>
        {title}
      </Heading>

      {children}
    </Card>
  );
}

function _Footer({ children }) {
  return (
    <Box mx="auto" mt={4} style={{ textAlign: "center" }}>
      {children}
    </Box>
  );
}

Layout.Heading = _Heading;
Layout.Card = _Card;
Layout.Footer = _Footer;
