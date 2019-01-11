import {keyframes} from 'styled-components';

function AnimationGenerator(direction: 'left' | 'right'): string {
  return keyframes`
  0% {
    ${direction}: 0px;
  }

  90% {
    ${direction}:95%;
  }

  100% {
    ${direction}:100%;
  }
`;
}

export const LeftMove = AnimationGenerator('left');
export const RightMove = AnimationGenerator('right');
