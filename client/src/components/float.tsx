import React, {Component, ReactNode} from 'react';

import styled from 'src/theme/style';

interface BaseProps {
  isView: boolean;
}

interface FloatWrapperProps extends BaseProps {}

interface FloatProps extends BaseProps {}

const Wrapper = styled.div<FloatWrapperProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: ${props => (props.isView ? 'block' : 'none')};
  z-index: 0;
  background: ${props => props.theme.translucentBlack};
`;

export class Float extends Component<FloatProps> {
  render(): ReactNode {
    let {children, isView} = this.props;

    return <Wrapper isView={isView}>{children}</Wrapper>;
  }
}
