import styled from "styled-components";

export const button = styled.button`
  outline: none;
  cursor: pointer;
  background:${props => props.theme.primaryColor}

  &:hover {
    background:${props => props.theme.hoverColor}
  }
`;
