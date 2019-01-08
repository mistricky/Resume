/**
 * Search 需要依赖于外部容器
 */

import React, {Component, ReactNode} from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

export interface SearchProps {
  placeHolder: string;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1000px;
  border: 1px solid ${props => props.theme.shadowColor};
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  margin-left: 5px;
  /* background: ${props => props.theme.backgroundColor}; */
`;

export class Search extends Component<SearchProps> {
  render(): ReactNode {
    let {placeHolder} = this.props;

    return (
      <Wrapper>
        <FontAwesome name="search" />
        <SearchInput placeholder={placeHolder} />
      </Wrapper>
    );
  }
}
