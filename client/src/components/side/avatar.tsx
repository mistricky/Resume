import React, {Component, ReactNode} from 'react';
import styled from 'styled-components';

interface AvatarProps {
  src: string;
}

const Wrapper = styled.div`
  width: 15rem;
  min-height: 15rem;
  border-radius: 50%;
  background: ${props => props.theme.backgroundColor};
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  overflow: hidden;
`;

const AvatarBody = styled.img`
  width: 15rem;
  height: 15rem;
`;

export class Avatar extends Component<AvatarProps> {
  render(): ReactNode {
    let {src} = this.props;

    return (
      <Wrapper>
        <AvatarBody src={src} />
      </Wrapper>
    );
  }
}
