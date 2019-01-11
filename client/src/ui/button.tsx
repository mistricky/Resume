import React, {CSSProperties, FunctionComponent} from 'react';
import styled from 'styled-components';

export interface BaseProps {
  color: string;
  hoverColor: string;
  hoverFontColor?: string;
}

export interface ButtonProps extends BaseProps {
  bgColor: string;
}

export interface GhostButtonProps extends BaseProps {
  bgColor?: string;
  style?: CSSProperties;
}

export const Button = styled.button<ButtonProps>`
  outline: none;
  color: ${props => props.color};
  cursor: pointer;
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.bgColor};
  transition: 0.3s all;

  &:hover {
    color: ${props => props.hoverFontColor};
    background: ${props => props.hoverColor};
  }
`;

const GhostButtonWrapper = styled(Button)`
  border: 1px solid ${props => props.theme.deepGray};
  border-radius: 1000px;
`;

export const GhostButton: FunctionComponent<GhostButtonProps> = props => {
  let {children, color, hoverColor, hoverFontColor, style} = props;

  return (
    <GhostButtonWrapper
      style={style}
      bgColor="transparent"
      color={color}
      hoverColor={hoverColor}
      hoverFontColor={hoverFontColor}
    >
      {children}
    </GhostButtonWrapper>
  );
};
