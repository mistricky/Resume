import React, { Component, ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    height: 100%;
  }
`;

export class Content extends Component {
  render(): ReactNode {
    return <Wrapper />;
  }
}
