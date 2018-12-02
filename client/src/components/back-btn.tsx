import React, {Component, ReactNode} from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

import styled from 'src/theme/style';

interface BackBtnProps {
  onClick?(): void;
}

export const BackIcon = styled(FontAwesome)`
  color: ${props => props.theme.shadowColor};
  cursor: pointer;
  transition: color 0.5s;

  :hover {
    color: #000;
  }
`;

const Wrapper = styled.div``;

export class BackBtn extends Component<BackBtnProps> {
  render(): ReactNode {
    let {onClick} = this.props;

    return (
      <Link to="/">
        <Wrapper>
          <BackIcon name="arrow-circle-left" onClick={onClick} />
        </Wrapper>
      </Link>
    );
  }
}
