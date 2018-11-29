import {observer} from 'mobx-react';
import React, {Component, ReactNode} from 'react';
import styled from 'styled-components';

import {Circle, CircleWrapper} from 'src/components';
import {loginModalCircleStore} from 'src/entrances';

export interface Style {
  width: string;
  height: string;
}

export interface FormControlProps {
  bgColor: string;
  style: Style;
}

const Body = styled.div`
  width: 500px;
  height: 600px;
  background: #fff;
  border-radius: ${props => props.theme.borderRadius};
  padding: 30px 20px;
  box-shadow: 0 0 5px ${props => props.theme.shadowColor};

  @media (max-width: ${props => props.theme.mobileWidth}) {
    box-shadow: none;
    width: 100% !important;
    height: 100% !important ;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${props => props.theme.mobileWidth}) {
    align-items: flex-start;
  }
`;

@observer
export class FormControl extends Component<FormControlProps> {
  render(): ReactNode {
    let {children, bgColor, style} = this.props;

    return (
      <Wrapper>
        <Body style={style}>{children}</Body>
        <CircleWrapper>
          <Circle bgColor={bgColor} isDeploy={loginModalCircleStore.isDeploy} />
        </CircleWrapper>
      </Wrapper>
    );
  }
}
