import {observer} from 'mobx-react';
import React, {Component, ReactNode} from 'react';
import styled from 'styled-components';

import {Circle, CircleWrapper} from 'src/components';
import {theme} from 'src/theme';

import {Direction} from './direction';
import {Label} from './label';

const Wrapper = styled.div``;
const Check = styled.div<CheckProps>`
  width: 20px;
  height: 20px;
  background: ${props => props.theme.darkGray};
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  padding: 5px;
  margin: 0 5px;
`;

interface CheckBoxProps {
  color?: string;
  isCheck?: boolean;
  handleClick?(): void;
}

interface CheckProps extends CheckBoxProps {
  isCheck: boolean;
}

@observer
export class CheckBox extends Component<CheckBoxProps> {
  isCheck: boolean = false;

  render(): ReactNode {
    let {
      color = theme.blue,
      isCheck = false,
      handleClick = this.noob,
    } = this.props;

    return (
      <Wrapper>
        <Direction direction="row">
          <Label onClick={() => handleClick()}>记住我哦</Label>
          <Check isCheck={isCheck} color={color} onClick={() => handleClick()}>
            <CircleWrapper zIndex="0">
              <Circle
                isCircle={true}
                size="12px"
                bgColor={color}
                isDeploy={isCheck}
                animationDuration="0.2s"
              />
            </CircleWrapper>
          </Check>
        </Direction>
      </Wrapper>
    );
  }

  private noob(): void {}
}
