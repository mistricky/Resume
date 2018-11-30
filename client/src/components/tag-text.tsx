import React, {Component, ReactNode} from 'react';
import {Dict} from 'shared';
import styled from 'styled-components';

interface TagTextProps {
  text: string;
  position?: 'left' | 'right';
  description?: string;
}

interface TagTextWrapperProps {
  parsedPosition: 'flex-start' | 'flex-end';
}

const PositionDict: Dict<'flex-start' | 'flex-end'> = {
  left: 'flex-start',
  right: 'flex-end',
};

const Wrapper = styled.div<TagTextWrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.parsedPosition};
  margin-top: 3rem;
`;

const TextWrapper = styled.div`
  width: fit-content;

  > p {
    margin: 0;
    padding: 0;
    line-height: 40px;
  }
`;

const Text = styled.p`
  font-size: ${props => props.theme.tagTextFont};
`;

const Description = styled.p`
  text-align: center;
  font-size: ${props => props.theme.mediumFont};
`;

export class TagText extends Component<TagTextProps> {
  render(): ReactNode {
    let {position = 'left', text, description} = this.props;

    let parsedPosition = PositionDict[position];

    return (
      <Wrapper parsedPosition={parsedPosition}>
        <TextWrapper>
          <Text>{text}</Text>
          <Description>{description}</Description>
        </TextWrapper>
      </Wrapper>
    );
  }
}
