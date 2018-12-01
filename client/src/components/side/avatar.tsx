import React, {Component, ReactNode} from 'react';
import {Dict} from 'shared';
import styled from 'styled-components';

type Size = 'small' | 'large';

interface AvatarProps {
  src: string;
  size?: Size;
}

interface AvatarWrapperProps {
  size: string;
}

const SizeDict: Dict<string> = {
  small: '3rem',
  large: '15rem',
};

const Wrapper = styled.div<AvatarWrapperProps>`
  width: ${props => props.size};
  min-height: ${props => props.size};
  border-radius: 50%;
  background: ${props => props.theme.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const AvatarBody = styled.img`
  width: 100%;
  height: 100%;
`;

export class Avatar extends Component<AvatarProps> {
  render(): ReactNode {
    let {src, size = 'large'} = this.props;

    return (
      <Wrapper size={SizeDict[size]}>
        <AvatarBody src={src} />
      </Wrapper>
    );
  }
}
