import styled from 'styled-components';

export const Button = styled.button`
  outline: none;
  cursor: pointer;
  background:${props => props.theme.green}

  &:hover {
    background:${props => props.theme.hoverColor}
  }
`;
