import React, {Component, ReactNode} from 'react';

import {Content} from 'src/components/content';
import {HeaderBar} from 'src/components/header';
import {Side} from 'src/components/side';
import {ThemeWrapper, injectGlobal, theme} from 'src/theme';
import styled from 'src/theme/style';

injectGlobal`
  * {
    box-sizing:border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
  }

  html {
    font-size:12px;
    min-width: 100%;
    min-height:100%;
  }

  body{
    position:relative;
    background: ${theme.backgroundColor};
    padding-top:4.5rem;
    padding: 0rem 1rem;
    overflow:hidden;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 756px) {
    #root {
      height: 100%;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export class App extends Component<{}, any> {
  render(): ReactNode {
    return (
      <ThemeWrapper>
        <Wrapper>
          <HeaderBar />
          <Side />
          <Content />
        </Wrapper>
      </ThemeWrapper>
    );
  }
}
