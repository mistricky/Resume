import styled from 'src/theme/style';

export interface DirectionProps {
  direction: 'row' | 'column';
  vertical?: 'center' | 'flex-star' | 'flex-end';
  horizontal?: 'center' | 'flex-star' | 'flex-end';
}

export const Direction = styled.div<DirectionProps>`
  display: flex;
  flex-direction: ${props => props.direction};
  ${props => (props.vertical ? `align-items:${props.vertical}` : undefined)}
  ${props =>
    props.horizontal ? `justify-content:${props.horizontal}` : undefined}
`;
