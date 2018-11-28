import React, {Component, ReactNode} from 'react';
import styled from 'styled-components';

import {BottomModal} from '../ui/bottom-modal';

interface LoginPromptModalProps {
  isView: boolean;
}

const LoginPrompt = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  justify-content: flex-end;
`;

export class LoginPromptModal extends Component<LoginPromptModalProps> {
  render(): ReactNode {
    let {isView} = this.props;

    return (
      <BottomModal isView={isView}>
        <LoginPrompt />
      </BottomModal>
    );
  }
}
