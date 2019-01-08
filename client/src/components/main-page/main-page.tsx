import React, {Component, ReactNode} from 'react';

import styled from 'src/theme/style';

import box from '../../asserts/box.png';
import emptyFile from '../../asserts/empty-file.png';
import resumeFile from '../../asserts/resume-file.png';
import {HeaderBar} from '../header';

import {Move} from './move';

interface SizableImageProps {
  width: string;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Principle = styled.div`
  width: 100%;
  height: 300px;
  padding: 2rem;
  margin-top: 2rem;
  border-radius: ${props => props.theme.borderRadius};
  /* background: ${props => props.theme.primaryColor}; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Channel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SingleChannel = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
`;

export const SizableImage = styled.img<SizableImageProps>`
  width: ${props => props.width};
`;

export class MainPage extends Component {
  moveNodes = {
    rows: 3,
    counts: 2,
  };

  render(): ReactNode {
    return (
      <Wrapper>
        <HeaderBar />
        <Principle>
          <Channel>{this.renderMoveNode(false, emptyFile)}</Channel>
          <SizableImage width="300px" src={box} style={{zIndex: 2}} />
          <Channel>{this.renderMoveNode(true, resumeFile)}</Channel>
        </Principle>
      </Wrapper>
    );
  }

  private renderMoveNode(isReserve: boolean, imgSrc: string): ReactNode {
    let {rows, counts} = this.moveNodes;

    return new Array(rows).fill(
      <SingleChannel>
        {new Array(counts).fill(
          <Move isReserve={isReserve}>
            <SizableImage width="70px" src={imgSrc} />
          </Move>,
        )}
      </SingleChannel>,
    );
  }
}
