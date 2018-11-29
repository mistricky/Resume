import {Provider, observer} from 'mobx-react';
import React, {Component, ReactNode} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {Login, Resume} from 'src/components';
import * as stores from 'src/entrances';
// tslint:disable-next-line:no-duplicate-imports
import {bottomModalStore, userService} from 'src/entrances';
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

@observer
export class App extends Component {
  componentWillMount(): void {
    if (!userService.user) {
      bottomModalStore.isView = true;
    }
  }

  render(): ReactNode {
    return (
      <ThemeWrapper>
        <Provider {...stores}>
          <Wrapper>
            {/* <Modal /> */}
            <BrowserRouter>
              <>
                <Route exact path="/" component={Resume} />
                <Route exact path="/login" component={Login} />
              </>
            </BrowserRouter>
          </Wrapper>
        </Provider>
      </ThemeWrapper>
    );
  }
}
