import styled from "styled-components";
import { position, zIndex, top, right, bottom, left } from "styled-system";
import { Box } from "rebass";

export const Position = styled(Box)(position, zIndex, top, right, bottom, left);

export const Relative = styled(Position)([]);

Relative.defaultProps = {
  position: "relative"
};

export const Absolute = styled(Position)([]);

Absolute.defaultProps = {
  position: "absolute"
};

export const Fixed = styled(Position)([]);

Fixed.defaultProps = {
  position: "fixed"
};
