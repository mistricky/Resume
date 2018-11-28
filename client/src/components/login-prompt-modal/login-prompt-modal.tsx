import {inject, observer} from 'mobx-react';
import React, {Component, ReactNode} from 'react';
import styled from 'styled-components';

// import {BottomModalStore} from 'src/store';
import {BottomModalStore} from 'src/store';
import {BottomModal} from 'src/ui';

import {BasicButtonWrapper} from './basic-button';

interface LoginPromptModalProps {
  isView: boolean;
  bottomModalStore?: any;
}

const LoginPrompt = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.popBgColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  position: relative;
  z-index: 1;

  @media (max-width: ${props => props.theme.mobileWidth}) {
    justify-content: center;
    align-item: center;
    flex-direction: column;
    height: auto;
    padding: 20px 0;
  }
`;

const PromptText = styled.div`
  color: #fff;
  font-size: ${props => props.theme.largeFont};
  margin-left: 20px;
`;

const ButtonWrapper = styled.div`
  @media (max-width: ${props => props.theme.mobileWidth}) {
    display: flex;
    flex-direction: column;

    > button {
      width: 100%;
      margin: 5px 0;
    }
  }
`;

@observer
@inject('bottomModalStore')
export class LoginPromptModal extends Component<LoginPromptModalProps> {
  private bottomModalStore: BottomModalStore;

  constructor(props: LoginPromptModalProps) {
    super(props);
    this.bottomModalStore = this.props.bottomModalStore;
  }

  handleClick(): void {
    this.closeModal();
  }

  render(): ReactNode {
    let {isView} = this.props;

    return (
      <BottomModal isView={isView}>
        <LoginPrompt>
          <PromptText>工作找到没啊！加入组织啊！！！</PromptText>
          <ButtonWrapper>
            <BasicButtonWrapper>Login</BasicButtonWrapper>
            <BasicButtonWrapper>Sign Up</BasicButtonWrapper>
            <BasicButtonWrapper width="auto" onClick={() => this.handleClick()}>
              Let me think think
            </BasicButtonWrapper>
          </ButtonWrapper>
        </LoginPrompt>
      </BottomModal>
    );
  }

  private closeModal(): void {
    this.bottomModalStore.isView = false;
  }
}
