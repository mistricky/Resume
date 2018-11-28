import React, {Component, ReactNode} from 'react';
import styled from 'styled-components';

import {BottomModal} from 'src/ui';

import {BasicButtonWrapper} from './basic-button';

interface LoginPromptModalProps {
  isView: boolean;
}

const LoginPrompt = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 5px;
`;

export class LoginPromptModal extends Component<LoginPromptModalProps> {
  handleClick(): void {
    alert('aaa');
  }

  render(): ReactNode {
    let {isView} = this.props;

    return (
      <BottomModal isView={isView}>
        <LoginPrompt>
          <BasicButtonWrapper>Login</BasicButtonWrapper>
          <BasicButtonWrapper>Sign Up</BasicButtonWrapper>
          <BasicButtonWrapper width="auto" onClick={() => this.handleClick()}>
            Let me think think
          </BasicButtonWrapper>
        </LoginPrompt>
      </BottomModal>
    );
  }
}
