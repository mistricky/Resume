import React, { Component, ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  & {
    width: 15rem;
    height: 15rem;
    border-radius: 1000px;
    background: ${props => props.theme.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export class Avatar extends Component {
  render(): ReactNode {
    let { children } = this.props;

    return <Wrapper>{children}</Wrapper>;
  }
}
