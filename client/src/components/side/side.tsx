import React, {Component, ReactNode} from 'react';

import {userService} from 'src/entrances';
import styled from 'src/theme/style';

import {Avatar} from './avatar';

const Wrapper = styled.div`
  width: 30rem;
  background: ${props => props.theme.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0px;

  @media (max-width: ${props => props.theme.mobileWidth}) {
    display: none;
  }
`;

export class Side extends Component {
  render(): ReactNode {
    return (
      <Wrapper>
        <Avatar src={userService.avatar} />
      </Wrapper>
    );
  }
}
