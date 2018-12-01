import React, {Component, ReactNode} from 'react';

import styled from 'src/theme/style';

const Wrapper = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
  background: white;
  margin-top: 1rem;
  border-radius: ${props => props.theme.borderRadius};
`;

const ItemBody = styled.div``;

export class Item extends Component {
  render(): ReactNode {
    let {children} = this.props;

    return (
      <Wrapper>
        <ItemBody>{children}</ItemBody>
      </Wrapper>
    );
  }
}
