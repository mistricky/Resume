import {Button} from 'antd';
import React, {Component, ReactNode} from 'react';

import styled, {theme} from 'src/theme/style';

interface ActionButtonBodyProps {
  bgColor?: string;
  color?: string;
  hoverColor?: string;
  onClick?(): void;
}

export interface EntryBtnProps extends ActionButtonBodyProps {
  loading?: boolean;
}

export const ActionButtonBody = styled.div<ActionButtonBodyProps>`
  > button {
    background: ${props => props.bgColor};
    color: ${props => props.color};
    transition: 0.3s all;
  }

  > button:hover {
    background: ${props => props.hoverColor};
  }
`;

export class ActionButton extends Component<EntryBtnProps> {
  render(): ReactNode {
    let {
      children,
      loading,
      bgColor,
      color = '#000',
      hoverColor = theme.shadowColor,
      onClick,
    } = this.props;

    return (
      <ActionButtonBody bgColor={bgColor} color={color} hoverColor={hoverColor}>
        <Button loading={loading} onClick={onClick}>
          {children}
        </Button>
      </ActionButtonBody>
    );
  }
}
