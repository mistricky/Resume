import React, {Component, ReactNode} from 'react';
import styled, {keyframes} from 'styled-components';

interface BottomModalProps {
  isView?: boolean;
  isCancel?: boolean;
}

const Pop = keyframes`
  from {
    transform: translateY(0)
  }

  to {
    transform: translateY(-100%)
  }
`;

const Hidden = keyframes`
  from {
    transform: translateY(-100%)
  }

  to {
    transform: translateY(0)
  }
`;

const Wrapper = styled.div<BottomModalProps>`
  width: 100%;
  height: 100px;
  position: absolute;
  left: 0px;
  top:100%;
  animation-fill-mode: forwards !important;
  ${props =>
    props.isView
      ? `animation: ${Pop} 0.6s linear 1`
      : props.isView === undefined
      ? undefined
      : `animation: ${Hidden} 0.6s linear 1`}

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
