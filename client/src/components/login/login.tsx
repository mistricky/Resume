import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {Component, ReactNode} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {theme} from 'src/theme';
import {Button, FormControl, Input} from 'src/ui';

import {BackBtn} from '../back-btn';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  width: 100%;
  height: 65px;
  font-size: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Coffee = styled(FontAwesomeIcon)`
  font-size: 30px;
`;

const TitleText = styled.div`
  margin: 0 10px;
`;

const EntryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const EntryBtn = styled(Button)`
  width: 80%;
  height: 40px;
`;

export class Login extends Component {
  render(): ReactNode {
    return (
      <FormControl
        bgColor={theme.blue}
        style={{
          width: '500px',
          height: 'auto',
        }}
      >
        <Wrapper>
          <Title>
            <Link to="/">
              <BackBtn />
            </Link>
            <TitleText>登录</TitleText>
            <Coffee icon="coffee" />
          </Title>
          <Input placeholder="请输入您的姓名" />
          <Input placeholder="请输入您的密码" type="password" />
          <EntryWrapper>
            <EntryBtn
              color="#fff"
              bgColor={theme.blue}
              hoverColor={theme.deepBlue}
            >
              修改自己的简历！
            </EntryBtn>
          </EntryWrapper>
        </Wrapper>
      </FormControl>
    );
  }
}
