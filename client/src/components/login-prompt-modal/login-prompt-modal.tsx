import {observer} from 'mobx-react';
import React, {Component, ReactNode} from 'react';
import styled from 'styled-components';

// import {BottomModalStore} from 'src/store';
import {
  bottomModalStore,
  floatStore,
  loginModalCircleStore,
} from 'src/entrances';
import {BottomModalStore, LoginModalCircleStore} from 'src/store';
import {theme} from 'src/theme';
import {BottomModal} from 'src/ui';

import {BasicButtonWrapper} from './basic-button';

export interface LoginPromptModalProps {
  bottomModalStore?: BottomModalStore;
  loginModalCircleStore?: LoginModalCircleStore;
}

export interface CircleProps {
  isDeploy?: boolean;
  bgColor: string;
  isCircle?: boolean;
  size?: string;
  animationDuration?: string;
}

export interface CircleWrapperProps {
  zIndex?: string;
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
  overflow: hidden;

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

const LoginButton = styled(BasicButtonWrapper)``;
const RegisterButton = styled(BasicButtonWrapper)``;
const SkipButton = styled(BasicButtonWrapper)``;

export const Circle = styled.div<CircleProps>`
  width: ${props =>
    props.isDeploy ? (props.isCircle ? props.size : '100%') : '0'};
  height: ${props =>
    props.isDeploy ? (props.isCircle ? props.size : '100%') : '0'};
  background: ${props => props.bgColor};
  transition: all ${props => props.animationDuration || '0.5s'};
  border-radius: ${props => (props.isCircle ? '50%' : '0')};
`;

export const CircleWrapper = styled.div<CircleWrapperProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${props => props.zIndex || -1} !important;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

@observer
export class LoginPromptModal extends Component<LoginPromptModalProps> {
  handleSkipClick(): void {
    this.closeModal();
  }

  handleLoginClick(): void {
    floatStore.loginIsView = true;
    this.closeModal();
  }

  handleRegisterClick(): void {
    floatStore.registerIsView = true;
    this.closeModal();
  }

  render(): ReactNode {
    return (
      <BottomModal isView={bottomModalStore.isView}>
        <LoginPrompt>
          <PromptText>工作找到没啊！加入组织啊！！！</PromptText>
          <ButtonWrapper>
            <LoginButton
              onClick={() => this.handleLoginClick()}
              circleColor={theme.blue}
            >
              登录
            </LoginButton>
            <RegisterButton
              onClick={() => this.handleRegisterClick()}
              circleColor={theme.yellow}
            >
              注册
            </RegisterButton>
            <SkipButton
              onClick={() => this.handleSkipClick()}
              circleColor="#000"
            >
              随便逛逛！
            </SkipButton>
          </ButtonWrapper>
          <CircleWrapper>
            <Circle
              bgColor={loginModalCircleStore.bgColor}
              isDeploy={loginModalCircleStore.isDeploy}
            />
          </CircleWrapper>
        </LoginPrompt>
      </BottomModal>
    );
  }

  private closeModal(): void {
    bottomModalStore.isView = false;
  }
}
