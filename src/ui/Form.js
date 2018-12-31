import React from "react";
import {
  color,
  border,
  borderRadius,
  space,
  fontSize,
  background,
  borderBottom,
  borderColor
} from "styled-system";
import styled from "styled-components";

import { Absolute, Relative } from "./position";

const StyledInput = styled("input")`
  border: none;
  width: 100%;
  box-sizing: border-box;
  color: white;
  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor || "white"};
  }

  ${background};
  ${fontSize};
  ${space};
  ${color};
  ${border};
  ${borderRadius};
  ${borderBottom};
  ${borderColor};
`;

export function Input({ icon, as, ...props }) {
  if (icon) {
    return (
      <Relative>
        <StyledInput {...props} as={as} />
        <Absolute top="0" right="0" style={{ opacity: 0.4 }}>
          {icon}
        </Absolute>
      </Relative>
    );
  }
  return <StyledInput {...props} as={as} />;
}
