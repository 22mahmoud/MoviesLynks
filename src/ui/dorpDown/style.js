import styled from "styled-components";

import { Relative } from "../position";

export const DropDownWrapper = styled(Relative)`
  color: #fff;
  cursor: pointer;
  z-index: 999;
`;

export const DropDownMenuWrapper = styled("ul")`
  background: #000;
  box-shadow: 0px 2px 60px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 1.1rem;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 3px;
  width: 12rem;
  ::before {
    content: " ";
    position: absolute;
    top: -0.6rem;
    right: 0.6rem;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 12px solid blac k;
  }
`;

export const DropDownMenuItemWrapper = styled("li")`
  width: 100%;
  list-style: none;
  margin: 0;
  margin-bottom: 0.6rem;
  display: flex;
  & > * {
    font-size: 0.9rem;
  }
`;
