import React from "react";
import styled from "styled-components";

const Spinner = styled("div")`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;

  > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    margin: 2px;
    border: ${p => `2px solid ${p.color || "#fff"}`};
    border-radius: 50%;
    animation: ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${p =>
      `${p.color || "#fff"} transparent transparent transparent`};
  }

  > div:nth-child(1) {
    animation-delay: -0.45s;
  }
  > div:nth-child(2) {
    animation-delay: -0.3s;
  }
  > div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default props => (
  <Spinner {...props}>
    <div />
    <div />
    <div />
    <div />
  </Spinner>
);
