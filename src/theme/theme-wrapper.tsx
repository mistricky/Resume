import React, { SFC } from "react";
import { ThemeProvider, theme } from "./style";

export const ThemeWrapper: SFC = props => {
  let { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
