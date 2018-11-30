import React, {Component, ReactNode} from 'react';
import {Dict} from 'shared';
import styled from 'styled-components';

interface TagTextProps {
  position?: 'left' | 'right';
}

interface TagTextWrapperProps {
  parsedPosition: 'flex-start' | 'flex-end';
}

const PositionDict: Dict<'flex-start' | 'flex-end'> = {
  left: 'flex-start',
  right: 'flex-end',
};

const Wrapper = styled.div<TagTextWrapperProps>`
  width: '100%';
  display: flex;
  justify-content: ${props => props.parsedPosition};
`;

const Text = styled.p`
  font-size: ${props => props.theme.tagTextFont};
`;

export class TagText extends Component<TagTextProps> {
  render(): ReactNode {
    let {position = 'left', children} = this.props;

    let parsedPosition = PositionDict[position];

    return (
      <Wrapper parsedPosition={parsedPosition}>
        <Text>{children}</Text>
      </Wrapper>
    );
  }
}
