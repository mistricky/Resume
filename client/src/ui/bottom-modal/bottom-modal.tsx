import React, {Component, ReactNode} from 'react';
import styled, {keyframes} from 'styled-components';

interface BottomModalProps {
  isView?: boolean;
}

const Pop = keyframes`
  from {
    bottom: -100px;
  }

  to {
    bottom: 0px;
  }
`;

const Hidden = keyframes`
  from {
    bottom: 0px;
  }

  to {
    bottom: -100px;
  }
`;

const Wrapper = styled.div<BottomModalProps>`
  width: 100%;
  height: 100px;
  position: absolute;
  left: 0px;
  bottom: -100px;
  background: #000;
  animation-fill-mode: forwards !important;
  ${props =>
    props.isView
      ? `animation: ${Pop} 1s linear 1, ${Hidden} 1s linear 3s 1;`
      : undefined}
`;

export class BottomModal extends Component<BottomModalProps> {
  render(): ReactNode {
    let {isView = false, children} = this.props;

    return <Wrapper isView={isView}>{children}</Wrapper>;
  }
}
