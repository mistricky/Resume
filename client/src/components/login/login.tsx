import {Popover} from 'antd';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import React, {Component, ReactNode} from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

import {loginModalCircleStore} from 'src/entrances';
import {theme} from 'src/theme';
import {
  Button,
  CheckBox,
  Direction,
  FormComponent,
  FormControl,
  FormControlBodyWrapper,
  FormTitle,
  Input,
} from 'src/ui';

import {BackBtn} from '../back-btn';

import {OtherLoginWay} from './other-login-way';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Coffee = styled(FontAwesome)`
  font-size: 30px;
`;

export const TitleText = styled.div`
  margin: 0 10px;
`;

export const EntryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EntryBtn = styled(Button)`
  width: 80%;
  height: 40px;
`;

const LoginQuestion = styled.div`
  color: ${props => props.theme.grayFontColor};
  font-size: ${props => props.theme.mediumFont};
  cursor: pointer;
`;

const LoginQuestionItem = styled.p`
  cursor: pointer;
`;

@observer
export class Login extends Component {
  @observable
  isCheck: boolean = false;

  @observable
  username: string = '';

  @observable
  password: string = '';

  @observable
  isFloat: boolean | undefined;

  componentWillUnmount(): void {
    loginModalCircleStore.isDeploy = false;
  }

  componentWillMount(): void {
    this.readUserInfo() &&
      setTimeout(() => (loginModalCircleStore.isDeploy = true), 500) &&
      (this.isFloat = true);

    loginModalCircleStore.isDeploy = false;
  }

  handleCheckBoxClick(): void {
    this.isCheck = !this.isCheck;

    if (this.isCheck) {
      this.saveUserInfo();
    } else {
      this.removeUserInfo();
    }
  }

  render(): ReactNode {
    let loginQuestion = (
      <>
        <LoginQuestionItem>1. 无法用手机重置密码</LoginQuestionItem>
        <LoginQuestionItem>2. 无法用邮箱重置密码</LoginQuestionItem>
        <LoginQuestionItem>3. 找回密码失败</LoginQuestionItem>
        <LoginQuestionItem>4. owner 太帅</LoginQuestionItem>
      </>
    );

    return (
      <FormControl
        bgColor={theme.blue}
        style={{
          width: '500px',
          height: 'auto',
        }}
      >
        <Wrapper>
          <FormControlBodyWrapper>
            <FormTitle>
              <BackBtn />
              <TitleText>登录</TitleText>
              <Coffee name="coffee" />
            </FormTitle>
            <FormComponent>
              <Input
                icon="user"
                placeholder="Username"
                onChange={val => (this.username = val)}
                value={this.username}
                isFloat={this.isFloat}
              />
            </FormComponent>
            <FormComponent>
              <Input
                icon="lock"
                placeholder="Password"
                type="password"
                value={this.password}
                onChange={val => (this.password = val)}
                isFloat={this.isFloat}
              />
            </FormComponent>
            <FormComponent>
              <Direction
                direction="row"
                style={{
                  width: '80%',
                  justifyContent: 'space-between',
                }}
              >
                <CheckBox
                  isCheck={this.isCheck}
                  handleClick={() => this.handleCheckBoxClick()}
                />
                <Popover
                  placement="bottomRight"
                  title="看看遇到的是不是这些问题？"
                  content={loginQuestion}
                >
                  <LoginQuestion>登录时遇到问题？</LoginQuestion>
                </Popover>
              </Direction>
            </FormComponent>
            <FormComponent>
              <EntryWrapper>
                <EntryBtn
                  color="#fff"
                  bgColor={theme.blue}
                  hoverColor={theme.deepBlue}
                >
                  修改自己的简历！
                </EntryBtn>
              </EntryWrapper>
            </FormComponent>
          </FormControlBodyWrapper>

          <OtherLoginWay />
        </Wrapper>
      </FormControl>
    );
  }

  private saveUserInfo(): void {
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
  }

  private removeUserInfo(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  private readUserInfo(): boolean {
    let username;
    let password;

    if (
      (username = localStorage.getItem('username')) &&
      (password = localStorage.getItem('password'))
    ) {
      this.username = username;
      this.password = password;

      return (this.isCheck = true);
    } else {
      return (this.isCheck = false);
    }
  }
}
