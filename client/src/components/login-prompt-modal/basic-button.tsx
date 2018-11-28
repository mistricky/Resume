import React, {Component, ReactNode} from 'react';

import styled, {theme} from 'src/theme/style';
import {Button} from 'src/ui';

const BasicButton = styled(Button)`
  width: 100px;
  height: 50px;
`;

export class BasicButtonWrapper extends Component {
  render(): ReactNode {
    let {children} = this.props;

    return (
      <BasicButton
        bgColor={theme.green}
        hoverColor={theme.deepGreen}
        color="#fff"
      >
        {children}
      </BasicButton>
    );
  }
}
