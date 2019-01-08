export const enum ERROR_TYPES {
  USER_EXIST,
  USER_NOT_EXIST,
}

export class RuntimeError {
  msg: string;
  type: ERROR_TYPES;

  constructor(msg: string, type: ERROR_TYPES) {
    this.msg = msg;
    this.type = type;
  }
}

export const USER_EXIST_ERROR = new RuntimeError(
  'This username is exist',
  ERROR_TYPES.USER_EXIST,
);

export const USER_NOT_EXIST_ERROR = new RuntimeError(
  'This username is not exist',
  ERROR_TYPES.USER_NOT_EXIST,
);
