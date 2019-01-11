import styled from "styled-components";
import React from "react";

const DEFAULT_SIZE = 3;

const Spinner = styled("div")`
  width: ${p => `${p.size || DEFAULT_SIZE * 4}px`};
  height: ${p => `${p.size || DEFAULT_SIZE * 4}px`};

  > div {
    position: absolute;
    width: ${p => `${p.size || DEFAULT_SIZE * 4}px`};
    height: ${p => `${p.size || DEFAULT_SIZE * 4}px`};
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
