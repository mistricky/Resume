import styled from 'styled-components';

export const Title = styled.h2`
  position: relative;
  margin-top: 1.5rem;

  ::after {
    content: '';
    width: 100%;
    height: 1px;
    border-bottom: 1px solid ${props => props.theme.darkGray};
    position: absolute;
    top: calc(100% + 1rem);
    left: 0;
  }
`;
