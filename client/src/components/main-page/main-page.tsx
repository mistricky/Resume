import React, {Component, ReactNode} from 'react';

import styled, {theme} from 'src/theme/style';
import {GhostButton} from 'src/ui';

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

const Logo = styled.p`
  font-size: 70px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 0;
`;

const Description = styled.p`
  font-size: 20px;
  text-align: center;
`;

const TextContainer = styled.div`
  margin-bottom: 50px;
`;

export const SizableImage = styled.img<SizableImageProps>`
  width: ${props => props.width};
`;

export const EntryContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Entry = styled(GhostButton)`
  width: 150px;
  height: 50px;
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
        <TextContainer>
          <Logo>Fast Resume</Logo>
          <Description>一个用于快速构建简历的工具</Description>
        </TextContainer>
        <Principle>
          <Channel>{this.renderMoveNode(false, emptyFile)}</Channel>
          <SizableImage width="300px" src={box} style={{zIndex: 2}} />
          <Channel>{this.renderMoveNode(true, resumeFile)}</Channel>
        </Principle>
        <EntryContainer>
          <GhostButton
            style={{
              padding: '15px 30px',
              fontSize: '20px',
            }}
            color="black"
            hoverColor={theme.green}
            hoverFontColor="#fff"
          >
            开始创建自己的简历
          </GhostButton>
        </EntryContainer>
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
