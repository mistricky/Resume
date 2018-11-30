import React, {Component, ReactNode} from 'react';
import FontAwesome from 'react-fontawesome';

import styled from 'src/theme/style';
import {FormComponent} from 'src/ui';

const Wrapper = styled.div`
  width: 100%;
  background: ${props => props.theme.darkPane};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  flex-direction: column;
`;

const OtherLoginText = styled.div`
  position: relative;

  ::before {
    content: '';
    display: block;
    width: 100px;
    height: 1px;
    border-top: 1px solid white;
    position: absolute;
    right: calc(100% + 10px);
    top: 50%;
  }

  ::after {
    content: '';
    display: block;
    width: 100px;
    height: 1px;
    border-top: 1px solid white;
    position: absolute;
    left: calc(100% + 10px);
    top: 50%;
  }
`;

const Icons = styled.div`
  font-size: 30px;
  display: flex;
  width: 100%;
  justify-content: space-between;

  > span {
    cursor: pointer;
  }

  > .fa-qq {
    color: ${props => props.theme.blue};
  }

  > .fa-wechat {
    color: ${props => props.theme.green};
  }

  > .fa-weibo {
    color: ${props => props.theme.red};
  }
`;

export class OtherLoginWay extends Component {
  render(): ReactNode {
    return (
      <Wrapper>
        <FormComponent>
          <OtherLoginText>其他登录方式</OtherLoginText>
        </FormComponent>

        <FormComponent
          style={{
            width: '60%',
          }}
        >
          <Icons>
            <FontAwesome name="qq" />
            <FontAwesome name="wechat" />
            <FontAwesome name="weibo" />
            <FontAwesome name="github-alt" />
          </Icons>
        </FormComponent>
      </Wrapper>
    );
  }
}
