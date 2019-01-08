import React, {Component, ReactNode} from 'react';
import {keyframes} from 'styled-components';

import styled from 'src/theme/style';

interface MoveAnimationProps {
  animationDuration?: number;
}

interface MoveProps extends MoveAnimationProps {
  isReserve?: boolean;
}

const moveAction = keyframes`
  0% {
    left:0;
    opacity:1;
  }

  80% {
    opacity:1;
  }

  100% {
    left:100%;
    opacity:0;
  }

`;

const moveReserveAction = keyframes`
  0% {
    left:-10%;
    opacity:0;
  }

  20% {
    opacity:1;
  }

  100% {
    left:90%;
    opacity:1;
  }

`;

const MoveAnimation = styled.div<MoveProps>`
  > * {
    position: absolute;
    left: 0;
    animation: ${props => (props.isReserve ? moveReserveAction : moveAction)}
      ${props => props.animationDuration}s linear infinite;
  }
`;

export class Move extends Component<MoveProps> {
  render(): ReactNode {
    let {children, isReserve = false} = this.props;

    return (
      <MoveAnimation
        isReserve={isReserve}
        animationDuration={Math.random() * 1.5 + 0.8}
      >
        {children}
      </MoveAnimation>
    );
  }
}
