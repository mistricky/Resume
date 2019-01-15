import {Modal} from 'antd';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import React, {Component, ReactNode} from 'react';
import {MutationFn, OperationVariables} from 'react-apollo';

import {floatStore, loginModalCircleStore} from 'src/entrances';
import {register} from 'src/graphql';
import {theme} from 'src/theme';
import {
  FormComponent,
  FormControl,
  FormControlBodyWrapper,
  FormTitle,
  Input,
} from 'src/ui';
import {isEmpty} from 'src/utils';

import {BackBtn} from '../back-btn';
import {Float} from '../float';
import {EntryBtn, EntryWrapper, TitleText} from '../login';

@observer
export class Register extends Component {
  @observable
  username: string = '';

  @observable
  password: string = '';

  componentWillUnmount(): void {
    loginModalCircleStore.isDeploy = false;
  }

  componentWillMount(): void {
    loginModalCircleStore.isDeploy = false;
  }

  // tslint:disable-next-line:use-default-type-parameter
  handleRegisterClick(register: MutationFn<any, OperationVariables>): void {
    if (isEmpty(this.username) || isEmpty(this.password)) {
      Modal.error({
        title: '提示',
        content: (
          <div>
            <p>账号或者密码不能为空！</p>
          </div>
        ),
      });

      return;
    }

    register({
      variables: {
        userInfo: {
          username: this.username,
          password: this.password,
        },
      },
    }).catch(err => console.error(err));
  }

  render(): ReactNode {
    return (
      <Float isView={floatStore.registerIsView}>
        <FormControl
          bgColor={theme.yellow}
          style={{
            width: '500px',
            height: 'auto',
          }}
        >
          <FormControlBodyWrapper>
            <FormTitle>
              <BackBtn
                onClick={() => {
                  floatStore.registerIsView = false;
                  loginModalCircleStore.isDeploy = false;
                }}
              />
              <TitleText>注册</TitleText>
            </FormTitle>
            <FormComponent>
              <Input
                icon="user"
                placeholder="Username"
                onChange={val => (this.username = val)}
              />
            </FormComponent>
            <FormComponent>
              <Input
                icon="lock"
                placeholder="Password"
                type="password"
                onChange={val => (this.password = val)}
              />
            </FormComponent>
            <FormComponent>
              <EntryWrapper>
                <EntryBtn
                  hoverColor={theme.deepGreen}
                  bgColor={theme.green}
                  color="#fff"
                  onClick={() => this.handleRegisterClick(register)}
                >
                  加入 Fast Resume 吧！
                </EntryBtn>
              </EntryWrapper>
            </FormComponent>
          </FormControlBodyWrapper>
        </FormControl>
      </Float>
    );
  }
}
