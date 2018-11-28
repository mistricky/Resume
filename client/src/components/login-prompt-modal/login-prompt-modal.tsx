import {observer} from 'mobx-react';
import React, {Component, ReactNode} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// import {BottomModalStore} from 'src/store';
import {bottomModalStore, loginModalCircleStore} from 'src/entrances';
import {BottomModalStore, LoginModalCircleStore} from 'src/store';
import {theme} from 'src/theme';
import {BottomModal} from 'src/ui';

import {BasicButtonWrapper} from './basic-button';

interface LoginPromptModalProps {
  bottomModalStore?: BottomModalStore;
  loginModalCircleStore?: LoginModalCircleStore;
}

export interface CircleProps {
  isDeploy?: boolean;
  bgColor: string;
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
  width: ${props => (props.isDeploy ? '100%' : '0')};
  height: ${props => (props.isDeploy ? '100%' : '0')};
  background: ${props => props.bgColor};
  transition: all 0.5s;
`;

export const CircleWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

@observer
export class LoginPromptModal extends Component<LoginPromptModalProps> {
  handleClick(): void {
    this.closeModal();
  }

  render(): ReactNode {
    return (
      <BottomModal isView={bottomModalStore.isView}>
        <LoginPrompt>
          <PromptText>工作找到没啊！加入组织啊！！！</PromptText>
          <ButtonWrapper>
            <Link to="/login">
              <LoginButton circleColor={theme.blue}>登录</LoginButton>
            </Link>
            <Link to="/register">
              <RegisterButton circleColor={theme.yellow}>注册</RegisterButton>
            </Link>
            <SkipButton onClick={() => this.handleClick()} circleColor="#000">
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
