import {observer} from 'mobx-react';
import React, {Component, ReactNode} from 'react';
import styled from 'styled-components';

import {Circle, CircleWrapper} from 'src/components';
import {loginModalCircleStore} from 'src/entrances';

interface Style {
  width: string;
  height: string;
}

interface FormControlProps {
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
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: ${props => props.theme.blue}; */
`;

@observer
export class FormControl extends Component<FormControlProps> {
  componentDidMount(): void {
    setTimeout(() => (loginModalCircleStore.isDeploy = true), 500);
  }

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
