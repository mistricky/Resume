import React, {Component, FunctionComponent, ReactNode} from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

import {floatStore, loginService} from 'src/entrances';
import {theme} from 'src/theme';
import {Button, Search} from 'src/ui';

export interface DrawerProps {
  isView: boolean;
}

export interface DefaultButtonProps {
  color: string;
  onClick?(): void;
}

const Wrapper = styled.div`
  width: 100%;
  height: 4.5rem;
  background: ${props => props.theme.primaryColor};
  box-shadow: 0px 0px 2px ${props => props.theme.shadowColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
  display: flex;
  position: absolute;
  top: 0px;
  left: 0px;

  button {
    height: 3rem;
    padding: 0 2rem;
    margin-left: 1rem;
  }
`;

const Drawer = styled(Button)<DrawerProps>`
  width: 3.5rem;
  height: 3rem;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
  display: ${props => (props.isView ? 'block' : 'none')};
`;

const Logo = styled.h1`
  color: ${props => props.theme.deepGreen};
  margin: 0;
  color: ${props => props.theme.gray};
  text-shadow: 0 0 4px ${props => props.theme.shadowColor};
  margin-right: 4rem;
`;

const SearchWrapper = styled.div`
  width: 24rem;
  height: 3rem;
  margin-left: 1rem;
`;

const EmptyWrapper = styled.div``;

const Join = styled.div``;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DefaultButton: FunctionComponent<DefaultButtonProps> = props => {
  let {children, color, onClick} = props;

  return (
    <Button
      onClick={onClick}
      color={color}
      bgColor="transparent"
      hoverColor={theme.shallowGray}
    >
      {children}
    </Button>
  );
};

const NavButton: FunctionComponent = props => {
  let {children} = props;

  return (
    <DefaultButton color={theme.deepGray}>
      <strong
        style={{
          fontSize: theme.mediumFont,
        }}
      >
        {children}
      </strong>
    </DefaultButton>
  );
};

// const UserWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

// const UserName = styled.div`
//   margin: 0 10px;
//   font-size: ${props => props.theme.largeFont};
// `;

export class HeaderBar extends Component {
  render(): ReactNode {
    // let {avatar, user} = userService;
    let {isLogin} = loginService;

    return (
      <Wrapper>
        <Nav>
          <Logo>Fast Resume</Logo>
          <EmptyWrapper>
            <NavButton>首页</NavButton>
            <NavButton>个人简历</NavButton>
            <NavButton>账号设置</NavButton>
          </EmptyWrapper>
        </Nav>
        <SearchWrapper>
          <Search placeHolder="请输入想要查询的简历" />
        </SearchWrapper>
        <>
          <Drawer
            bgColor={theme.primaryColor}
            color={theme.color}
            hoverColor={theme.hoverColor}
            isView={isLogin}
          >
            <FontAwesome name="bars" />
          </Drawer>
          <Join>
            <DefaultButton
              color={theme.green}
              onClick={() => (floatStore.registerIsView = true)}
            >
              立即注册
            </DefaultButton>
            <Button
              color="#fff"
              bgColor={theme.green}
              hoverColor={theme.deepGreen}
              onClick={() => (floatStore.loginIsView = true)}
            >
              免费登录
            </Button>
          </Join>
        </>
      </Wrapper>
    );
  }
}
