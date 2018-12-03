import {Provider, observer} from 'mobx-react';
import React, {Component, ReactNode} from 'react';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter, Route} from 'react-router-dom';

import {Login, Register, Resume} from 'src/components';
import * as stores from 'src/entrances';
// tslint:disable-next-line:no-duplicate-imports
import {
  bottomModalStore,
  loginService,
  projectExperienceService,
  workExperienceService,
} from 'src/entrances';
import {client} from 'src/graphql';
import {WorkExperience} from 'src/services';
import {ProjectExperience} from 'src/services/project-experience.service';
import {ThemeWrapper, injectGlobal, theme} from 'src/theme';
import styled from 'src/theme/style';

// mock request work experiences data
let experiences: WorkExperience[] = [
  {
    company: '德阳歆美科技有限公司',
    since: 1,
    beginTime: new Date(),
    endTime: new Date(),
    station: 'Web 前端工程师',
    department: '研发部',
  },
  {
    company: '成都木帆科技有限公司',
    since: 0.5,
    beginTime: new Date(),
    endTime: new Date(),
    station: 'Web 前端工程师',
    department: '研发部',
  },
  {
    company: 'Stepin',
    since: 0.5,
    beginTime: new Date(),
    endTime: new Date(),
    station: 'Web 前端工程师',
    department: '研发部',
  },
];

let projectExperiences: ProjectExperience[] = [
  {
    company: '德阳歆美科技有限公司',
    projectName: '天文航海训保通',
    description: '```\n function hello(){}\n ```',
  },
];

injectGlobal`
  * {
    box-sizing:border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
  }

  html {
    font-size:12px;
  }

  body{
    position:relative;
    background: ${theme.backgroundColor};
    padding-top:4.5rem;
    padding: 0rem 1rem;
    overflow:hidden;
    min-height:28rem;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 756px) {
    #root {
      height: 100%;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

@observer
export class App extends Component {
  componentWillMount(): void {
    workExperienceService.setExperiences(experiences);
    projectExperienceService.setProjectExperiences(projectExperiences);

    if (!loginService.isLogin) {
      bottomModalStore.isView = true;
    }
  }

  render(): ReactNode {
    return (
      <ThemeWrapper>
        <ApolloProvider client={client}>
          <Provider {...stores}>
            <Wrapper>
              {/* <Modal /> */}
              <BrowserRouter>
                <>
                  <Route exact path="/" component={Resume} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                </>
              </BrowserRouter>
            </Wrapper>
          </Provider>
        </ApolloProvider>
      </ThemeWrapper>
    );
  }
}
