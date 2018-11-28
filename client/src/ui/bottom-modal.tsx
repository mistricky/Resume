import React, {Component, ReactNode} from 'react';
import styled, {keyframes} from 'styled-components';

interface BottomModalProps {
  isView?: boolean;
  isCancel?: boolean;
}

const Pop = keyframes`
  from {
    bottom: -100%;
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
    bottom: -100%;
  }
`;

const Wrapper = styled.div<BottomModalProps>`
  width: 100%;
  height: 100px;
  position: absolute;
  left: 0px;
  bottom: -100px;
  animation-fill-mode: forwards !important;
  ${props =>
    props.isView
      ? `animation: ${Pop} 1s linear 1`
      : props.isView === undefined
      ? undefined
      : `animation: ${Hidden} 1s linear 1`}

  @media (max-width: ${props => props.theme.mobileWidth}) {
    height:auto;
  }
`;

export class BottomModal extends Component<BottomModalProps> {
  render(): ReactNode {
    let {isView, children} = this.props;

    return <Wrapper isView={isView}>{children}</Wrapper>;
  }
}
