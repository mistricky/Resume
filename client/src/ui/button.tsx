import styled from 'styled-components';

interface ButtonProps {
  bgColor: string;
  color: string;
  hoverColor: string;
}

export const Button = styled.button<ButtonProps>`
  outline: none;
  color: ${props => props.color};
  cursor: pointer;
  border:none;
  border-radius: ${props => props.theme.borderRadius};
  background:${props => props.bgColor}

  &:hover {
    background:${props => props.hoverColor}
  }
`;
