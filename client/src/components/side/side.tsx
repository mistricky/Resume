import {observer} from 'mobx-react';
import React, {Component, ReactNode} from 'react';

import {userService} from 'src/entrances';
import styled from 'src/theme/style';
import {Title} from 'src/ui';

import {Avatar} from './avatar';
import {Info} from './info';
import {ContactItem} from './item';

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

@observer
export class Side extends Component {
  render(): ReactNode {
    let {
      user,
      age,
      station,
      sex,
      location,
      telNum,
      email,
      description,
      homePages,
    } = userService;

    let homePagesList = homePages.map((page, index) => (
      <ContactItem
        key={index}
        icon={page.type === 'github' ? 'github-alt' : 'home'}
        type="link"
        msg={page.link}
      />
    ));

    return (
      <Wrapper>
        <Avatar src={userService.avatar} />
        <Info>
          <Title>CONTACT</Title>
          <ContactItem icon="user-circle" msg={user} />
          <ContactItem icon="hourglass-end" msg={age} />
          <ContactItem icon={sex === '男' ? 'mars' : 'venus'} msg={sex} />
          <ContactItem icon="phone" msg={telNum} />
          <ContactItem icon="envelope" msg={email} />
          <ContactItem icon="id-badge" msg={station} />
          <ContactItem icon="map-marker" msg={location} />
          <ContactItem icon="pencil" msg={description} />
          <Title>HOME PAGE</Title>
          {homePagesList}
        </Info>
      </Wrapper>
    );
  }
}
