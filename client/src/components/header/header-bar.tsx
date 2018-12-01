import React, {Component, ReactNode} from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

import {userService} from 'src/entrances';
import {theme} from 'src/theme';
import {Button} from 'src/ui';

import {Avatar} from '../side';

const Wrapper = styled.div`
  width: 100%;
  height: 4.5rem;
  background: ${props => props.theme.primaryColor};
  box-shadow: 0px 0px 2px ${props => props.theme.shadowColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
  display: none;
  position: absolute;
  top: 0px;
  left: 0px;

  @media (max-width: ${props => props.theme.mobileWidth}) {
    & {
      display: flex;
    }
  }
`;

const Drawer = styled(Button)`
  width: 3.5rem;
  height: 3rem;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserName = styled.div`
  margin: 0 10px;
  font-size: ${props => props.theme.largeFont};
`;

export class HeaderBar extends Component {
  render(): ReactNode {
    let {avatar, user} = userService;

    return (
      <Wrapper>
        <UserWrapper>
          <Avatar src={avatar} size="small" />
          <UserName>{user}</UserName>
        </UserWrapper>
        <Drawer
          bgColor={theme.primaryColor}
          color={theme.color}
          hoverColor={theme.hoverColor}
        >
          <FontAwesome name="bars" />
        </Drawer>
      </Wrapper>
    );
  }
}
