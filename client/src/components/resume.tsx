import React, {Component, ReactNode} from 'react';

import {Content} from './content';
import {HeaderBar} from './header';
import {Login} from './login';
import {LoginPromptModal} from './login-prompt-modal';
import {Register} from './register';
import {Side} from './side';

export class Resume extends Component {
  render(): ReactNode {
    return (
      <>
        <HeaderBar />
        <Side />
        <Content />
        <LoginPromptModal />
        <Login />
        <Register />
      </>
    );
  }
}
