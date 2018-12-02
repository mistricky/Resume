import React, {Component, ReactNode} from 'react';
import styled from 'styled-components';

import {markdown} from 'src/utils';

interface ProjectDescriptionProps {
  code: string;
}

export const Wrapper = styled.div`
  & code {
    border-radius: ${props => props.theme.borderRadius};
  }
`;

export const ProjectDescriptionBody = styled.div`
  background: ${props => props.theme.shallowGray};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1rem;
`;

export class ProjectDescription extends Component<ProjectDescriptionProps> {
  render(): ReactNode {
    let {code} = this.props;

    const renderedCode = markdown(code);

    return (
      <Wrapper>
        <ProjectDescriptionBody
          dangerouslySetInnerHTML={{
            __html: renderedCode,
          }}
        />
      </Wrapper>
    );
  }
}
