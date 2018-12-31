import React from "react";
import { Link as L } from "rebass";
import { Link as RouterLink } from "react-router-dom";

export const Link = ({ children, to, borderRadius, ...props }) => (
  <L
    as={RouterLink}
    color="white"
    to={to}
    {...props}
    style={{ textDecoration: "none" }}
  >
    {children}
  </L>
);
