import React, {Component, ReactNode} from 'react';

import {loginModalCircleStore} from 'src/entrances';
import styled, {theme} from 'src/theme/style';
import {Button} from 'src/ui';

interface BasicButtonProps {
  width?: string;
  circleColor?: string;
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
  handleBtnOver(circleColor: string): void {
    loginModalCircleStore.isDeploy = true;
    loginModalCircleStore.bgColor = circleColor;
  }

  handleBtnOut(): void {
    loginModalCircleStore.isDeploy = false;
  }

  render(): ReactNode {
    let {children, width, onClick, circleColor = 'transparent'} = this.props;

    return (
      <BasicButton
        bgColor={theme.green}
        hoverColor={theme.deepGreen}
        color="#fff"
        width={width}
        onClick={onClick}
        onMouseOver={() => this.handleBtnOver(circleColor)}
        onMouseOut={() => this.handleBtnOut()}
      >
        {children}
      </BasicButton>
    );
  }
}
