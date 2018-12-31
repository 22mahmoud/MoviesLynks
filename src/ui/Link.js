import React from "react";
import { Link as L } from "rebass";
import { Link as RouterLink } from "react-router-dom";

export const Link = ({ children, ...props }) => (
  <L
    as={RouterLink}
    color="white"
    {...props}
    style={{ textDecoration: "none" }}
  >
    {children}
  </L>
);
