import {observable} from 'mobx';
import React, {CSSProperties, Component, ReactNode, ReactText} from 'react';

import styled from 'src/theme/style';
import {removeUnit} from 'src/utils';

export interface ScrollPanelProps {
  style: CSSProperties;
  children(next: (index: number) => void): ReactNode;
}

interface ScrollPanelWrapperProps {
  width: ReactText;
  height: ReactText;
  left: ReactText;
}

const Wrapper = styled.div<ScrollPanelWrapperProps>`
  position: absolute;
  left: ${props => props.left};
  top: 0;
`;

const Placeholder = styled.div``;

export class ScrollPanel extends Component<ScrollPanelProps> {
  @observable
  left: ReactText = '0px';

  next(height: ReactText): (index: number) => void {
    return (index: number): void => {
      this.left = `${+removeUnit(height as string) * index}px`;
    };
  }

  render(): ReactNode {
    let {children, style} = this.props;
    let {width = '0px', height = '0px'} = style;
    let ele = children(this.next(height));

    return (
      <>
        <Placeholder style={style} />
        <Wrapper width={width} height={height} left={this.left}>
          {ele}
        </Wrapper>
      </>
    );
  }
}
