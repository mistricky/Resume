import React, {Component, ReactNode} from 'react';

import styled, {theme} from 'src/theme/style';
import {Button} from 'src/ui';

interface BasicButtonProps {
  width?: string;
}

interface BasicButtonWrapperProps extends BasicButtonProps {
  onClick?(): void;
}

const BasicButton = styled(Button)<BasicButtonProps>`
  width: ${props => props.width || '100px'};
  height: 50px;
  margin-left: 16px;
  ${props => (props.width ? 'padding: 0 15px;' : undefined)}

  @media (min-width: ${props => props.theme.mobileWidth}) {
    & {
      margin-left: 20px;
      margin-right: 6px;
    }
  }
`;

export class BasicButtonWrapper extends Component<BasicButtonWrapperProps> {
  render(): ReactNode {
    let {children, width, onClick} = this.props;

    return (
      <BasicButton
        bgColor={theme.green}
        hoverColor={theme.deepGreen}
        color="#fff"
        width={width}
        onClick={onClick}
      >
        {children}
      </BasicButton>
    );
  }
}
