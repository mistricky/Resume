import React, {Component, ReactNode} from 'react';
import FontAwesome from 'react-fontawesome';

import styled from 'src/theme/style';

interface ContactItemProps {
  icon: string;
  msg: string;
  type?: 'link' | 'text';
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1rem;
`;

const Info = styled.div`
  font-size: ${props => props.theme.mediumFont};
`;

const TagIconWrapper = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 1rem;
`;
const TagIcon = styled(FontAwesome)`
  font-size: ${props => props.theme.largeFont};
`;

export class ContactItem extends Component<ContactItemProps> {
  render(): ReactNode {
    let {icon, msg, type} = this.props;

    let text = type === 'link' ? <a href={msg}>{msg}</a> : msg;

    return (
      <Wrapper>
        <TagIconWrapper>
          <TagIcon name={icon} />
        </TagIconWrapper>
        <Info>{text}</Info>
      </Wrapper>
    );
  }
}
