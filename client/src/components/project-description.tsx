import React, {Component, ReactNode} from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const ProjectDescriptionBody = styled.div`
  background: ${props => props.theme.shadowColor};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1rem;
`;

export class ProjectDescription extends Component {
  render(): ReactNode {
    let {children} = this.props;

    return (
      <Wrapper>
        <ProjectDescriptionBody />
      </Wrapper>
    );
  }
}
