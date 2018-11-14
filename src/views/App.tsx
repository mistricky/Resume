import React, { Component, ReactNode } from "react";
import { ThemeWrapper, injectGlobal, theme } from "src/theme";
import { Resume } from "src/components/resume";

injectGlobal`
  body{
    background:${theme.backgroundColor}
  }
`;

export class App extends Component {
  render(): ReactNode {
    return (
      <ThemeWrapper>
        <Resume />
      </ThemeWrapper>
    );
  }
}
