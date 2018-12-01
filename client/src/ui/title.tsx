import React, {Component, ReactNode} from 'react';
import styled from 'styled-components';

export interface TitleProps {
  hasLine?: boolean;
}

export const TitleBody = styled.h2<TitleProps>`
  position: ${props => (props.hasLine ? 'relative' : 'static')};
  margin-top: 1.5rem;

  ${props =>
    props.hasLine
      ? `
    ::after {
      content: '';
      width: 100%;
      height: 1px;
      border-bottom: 1px solid ${props.theme.darkGray};
      position: absolute;
      top: calc(100% + 1rem);
      left: 0;
    }
  `
      : undefined}
`;

export class Title extends Component<TitleProps> {
  render(): ReactNode {
    let {hasLine = true, children} = this.props;

    return <TitleBody hasLine={hasLine}>{children}</TitleBody>;
  }
}
