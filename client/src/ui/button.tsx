import styled from 'styled-components';

export const Button = styled.button`
  outline: none;
  color: white;
  cursor: pointer;
  border:none;
  background:${props => props.theme.green}

  &:hover {
    background:${props => props.theme.deepGreen}
  }
`;
