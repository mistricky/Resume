import React, { Component, ReactNode } from "react";
import styled from "src/theme/style";
import { Avatar } from "./avatar";

const Wrapper = styled.div`
  flex: 1;
  background: ${props => props.theme.primaryColor};

  @media (max-width: ${props => props.theme.mobileWidth}) {
    display: none;
  }
`;

export class Side extends Component {
  render(): ReactNode {
    return (
      <Wrapper>
        <Avatar />
      </Wrapper>
    );
  }
}
