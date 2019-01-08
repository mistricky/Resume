import gql from 'graphql-tag';

export const register = gql`
  mutation AddUser($userInfo: UserInfo) {
    register(userInfo: $userInfo) {
      isErr
      payload
      errMsg
    }
  }
`;

export const login = gql`
  mutation ValidateUser($userInfo: UserInfo) {
    login(userInfo: $userInfo) {
      isErr
      payload
      errMsg
    }
  }
`;
