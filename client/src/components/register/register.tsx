import {observable} from 'mobx';
import React, {Component, ReactNode} from 'react';

import {loginModalCircleStore} from 'src/entrances';
import {theme} from 'src/theme';
import {
  FormComponent,
  FormControl,
  FormControlBodyWrapper,
  FormTitle,
  Input,
} from 'src/ui';

import {BackBtn} from '../back-btn';
import {EntryBtn, EntryWrapper, TitleText} from '../login';

type InputType = 'username' | 'password';

export class Register extends Component {
  @observable
  username!: string;

  @observable
  password!: string;

  componentWillUnmount(): void {
    loginModalCircleStore.isDeploy = false;
  }

  componentWillMount(): void {
    loginModalCircleStore.isDeploy = false;
  }

  handleRegisterClick(): void {
    // httpService.post('/');
  }

  handleInputChange(val: string, type: InputType): void {
    this[type] = val;
  }

  render(): ReactNode {
    return (
      <FormControl
        bgColor={theme.yellow}
        style={{
          width: '500px',
          height: 'auto',
        }}
      >
        <FormControlBodyWrapper>
          <FormTitle>
            <BackBtn />
            <TitleText>注册</TitleText>
          </FormTitle>
          <FormComponent>
            <Input
              icon="user"
              onChange={val => this.handleInputChange(val, 'username')}
              placeholder="Username"
            />
          </FormComponent>
          <FormComponent>
            <Input
              icon="lock"
              onChange={val => this.handleInputChange(val, 'password')}
              placeholder="Password"
            />
          </FormComponent>
          <FormComponent>
            <EntryWrapper>
              <EntryBtn
                color="#fff"
                bgColor={theme.green}
                hoverColor={theme.deepGreen}
                onClick={() => this.handleRegisterClick()}
              >
                加入 Fast Resume ！
              </EntryBtn>
            </EntryWrapper>
          </FormComponent>
        </FormControlBodyWrapper>
      </FormControl>
    );
  }
}
