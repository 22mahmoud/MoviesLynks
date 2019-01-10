import styled from "styled-components";
import { space, boxShadow, borderRadius, color, bgColor } from "styled-system";
import { Relative } from "../position";

export const Wrapper = styled(Relative)`
  cursor: pointer;
  z-index: 999;
`;

export const MenuWrapper = styled("div")`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  ${space};
  ${color};
  ${bgColor};
  ${boxShadow};
  ${borderRadius};
`;

export const ItemWrapper = styled.li`
  width: 100%;
  list-style: none;
  ${space};
`;
