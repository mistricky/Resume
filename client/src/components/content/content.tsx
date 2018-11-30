import React, {Component, ReactNode} from 'react';
import styled from 'styled-components';

import {userService} from 'src/entrances';

import {TagText} from '../tag-text';

const Wrapper = styled.div`
  flex: 1;
  padding: 0 2rem;

  @media (max-width: 960px) {
    width: 100%;
    height: 100%;
    padding: 5rem 1rem;
  }
`;

export class Content extends Component {
  render(): ReactNode {
    let {user, description} = userService;

    return (
      <Wrapper>
        <TagText text={user} description={description} />
      </Wrapper>
    );
  }
}
