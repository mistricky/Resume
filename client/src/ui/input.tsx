import {observer} from 'mobx-react';
import React, {Component, ReactNode} from 'react';
import FontAwesome from 'react-fontawesome';
import styled, {keyframes} from 'styled-components';

import {loginModalCircleStore} from 'src/entrances';
import {theme} from 'src/theme';

import {Direction} from './direction';

interface InputWrapperProps {
  shadowColor?: string;
}

interface InputState {
  isFloat: boolean;
}

interface InputProps extends InputWrapperProps {
  placeholder?: string;
  type?: string;
  icon?: string;
  value?: string;
  isFloat?: boolean;
  onChange?(val: string): void;
}

interface PlaceHolderProps {
  isFloat: boolean;
  icon?: string;
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div<InputWrapperProps>`
  width: 80%;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.shadowColor};
  padding: 0 5px;
  position: relative;
`;

const InputBody = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: ${props => props.theme.mediumFont};
`;

const PlaceHolderFloat = keyframes`
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(-31px, -100%);
  }
`;

const PlaceHolderLand = keyframes`
  from {
    transform: translate(-31px, -100%);
  }

  to {
    transform: translate(0, 0);
  }
`;

const PlaceHolder = styled.div<PlaceHolderProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  left: 5px;
  top: 0;
  margin-left:26px;
  color: ${props => props.theme.darkGray};
  ${props =>
    props.isFloat ? 'color: #000;' : `color: ${props.theme.darkGray};`}
  font-size: ${props => props.theme.mediumFont};
  cursor: text;
  animation-fill-mode: forwards !important;
  ${props =>
    props.isFloat
      ? `animation: ${PlaceHolderFloat} 0.1s linear 1;`
      : `animation: ${PlaceHolderLand} 0.1s linear 1;`}
`;

const FontIcon = styled(FontAwesome)`
  font-size: ${props => props.theme.largeFont};
  margin-right: 5px;
`;

const FullDirection = styled(Direction)`
  width: 100%;
  height: 100%;
`;

@observer
export class Input extends Component<InputProps, InputState> {
  private inputBody: HTMLInputElement | undefined;

  constructor(props: InputProps) {
    super(props);

    this.state = {
      isFloat: false,
    };
  }

  handlePlaceHolderClick(): void {
    if (this.inputBody) {
      this.inputBody.focus();
    }

    this.setState({
      isFloat: true,
    });
  }

  render(): ReactNode {
    let {
      shadowColor = theme.shadowColor,
      placeholder,
      type = 'text',
      icon,
      value,
      onChange = this.noob,
      isFloat,
    } = this.props;

    let Icon = icon ? <FontIcon name={icon} /> : undefined;

    return (
      <Wrapper>
        <InputWrapper shadowColor={shadowColor}>
          <PlaceHolder
            onClick={() => this.handlePlaceHolderClick()}
            isFloat={isFloat === undefined ? this.state.isFloat : isFloat}
          >
            {placeholder}
            {this.state.isFloat ? ':' : undefined}
          </PlaceHolder>
          <FullDirection direction="row" horizontal="center" vertical="center">
            {Icon}
            <InputBody
              onChange={e => onChange(e.target.value)}
              onFocus={() => (loginModalCircleStore.isDeploy = true)}
              onBlur={() => {
                if (this.inputBody && this.inputBody.value === '') {
                  this.setState({isFloat: false});
                }
              }}
              value={value}
              innerRef={ele => (this.inputBody = ele)}
              type={type}
              autoComplete="new-password"
            />
          </FullDirection>
        </InputWrapper>
      </Wrapper>
    );
  }

  private noob(): void {}
}
