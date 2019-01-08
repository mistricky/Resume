import {RuntimeError} from 'src/core';

export class UserInfoDTO {
  username!: string;
  password!: string;
}

export class RequestResult {
  isErr!: boolean | undefined;
  payload!: unknown;
  errMsg!: string;
}

export function requestResultFactory(
  result: boolean,
  payload: unknown,
  error: RuntimeError,
): RequestResult {
  let requestResult = new RequestResult();

  if (result) {
    requestResult.isErr = false;
    requestResult.payload = payload;
  } else {
    requestResult.isErr = true;
    requestResult.errMsg = error.msg;
  }

  return requestResult;
}
