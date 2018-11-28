import React, {FunctionComponent} from 'react';

import {ThemeProvider, theme} from './style';

export const ThemeWrapper: FunctionComponent = props => {
  let {children} = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
