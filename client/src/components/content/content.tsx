import {observer} from 'mobx-react';
import React, {Component, ReactNode} from 'react';
import styled from 'styled-components';

import {
  projectExperienceService,
  userService,
  workExperienceService,
} from 'src/entrances';
import {Title} from 'src/ui';
import {formatTime} from 'src/utils/time-processor';

import {Entries} from '../entries';
import {Item} from '../item';
import {ProjectDescription} from '../project-description';
import {TagText} from '../tag-text';

const Wrapper = styled.div`
  flex: 1;
  padding: 0 2rem;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 960px) {
    width: 100%;
    height: 100%;
    padding: 5rem 1rem;
  }
`;

@observer
export class Content extends Component {
  render(): ReactNode {
    let {user, description} = userService;

    let workExperiences = workExperienceService.experiences.map(
      (experience, index) => (
        <Item key={index}>
          <Entries>公司: {experience.company}</Entries>
          <Entries>工作年限: {experience.since} 年</Entries>
          <Entries>
            工作时间段: {formatTime(experience.beginTime)}-
            {formatTime(experience.endTime)}
          </Entries>
          <Entries>职位: {experience.station}</Entries>
          <Entries>部门: {experience.department}</Entries>
        </Item>
      ),
    );

    let projectExperiences = projectExperienceService.projectExperiences.map(
      (experience, index) => (
        <Item key={index}>
          <Entries>公司: {experience.company}</Entries>
          <Entries>项目名称: {experience.projectName}</Entries>
          <Entries>
            <ProjectDescription code={experience.description} />
          </Entries>
        </Item>
      ),
    );

    return (
      <Wrapper>
        <TagText text={user} description={description} />
        <Title hasLine={false}>Work Experience</Title>
        {workExperiences}
        <Title hasLine={false}>Project Experience</Title>
        {projectExperiences}
      </Wrapper>
    );
  }
}
