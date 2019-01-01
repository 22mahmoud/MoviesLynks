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
import { Box, Text } from "rebass";

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

export function FormInput({
  label,
  name,
  type,
  placeholder,
  error,
  touched,
  ...rest
}) {
  return (
    <Box>
      <Text as="label" fontSize={[2, 3]}>
        {label}
      </Text>
      <Input
        {...rest}
        name={name}
        type={type}
        fontSize={[2, 3]}
        p={2}
        color="#383759"
        borderRadius={5}
        border={2}
        borderColor={error && touched ? "tomato" : "#678ade"}
        placeholderColor="#678ade"
        placeholder={placeholder}
      />
      {error && touched && (
        <Text fontWeight={0} fontSize={[2, 3]} color="tomato">
          {error}
        </Text>
      )}
    </Box>
  );
}
