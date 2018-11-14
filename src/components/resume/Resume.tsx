import { Component, ReactNode } from "react";
import * as React from "react";
import styled, { ThemeProvider } from "styled-components";

const MyButton = styled.div`
  color: ${props => props.theme.color};
`;

export class Resume extends Component {
  public render(): ReactNode {
    return (
      <ThemeProvider theme={{ color: "#f00" }}>
        <MyButton>Hello</MyButton>
      </ThemeProvider>
    );
  }
}
