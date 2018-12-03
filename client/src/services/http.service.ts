import Axios from 'axios';

import {REQUEST_BASE_URL} from 'src/constant';

Axios.defaults.baseURL = REQUEST_BASE_URL;

interface BaseRequestOptions {
  type: string;
}

type Method = 'Get' | 'Post';

export class HTTPService {
  post<T>(
    path: string,
    body: T,
    baseRequestOptions?: BaseRequestOptions,
  ): Promise<T> {
    return this.baseRequest(path, 'Post', body, baseRequestOptions);
  }

  get<T>(path: string): Promise<T> {
    return this.baseRequest(path, 'Get');
  }

  private async baseRequest<T>(
    path: string,
    method: Method,
    body?: T,
    baseRequestOptions?: BaseRequestOptions,
  ): Promise<T> {
    let options = baseRequestOptions || {
      type: 'application/json;charset=utf-8',
      timeout: 10 * 1000,
    };

    let result!: T;

    try {
      result = await Axios[method](path, body, options);
    } catch (e) {
      console.error(e);
    }

    return result;
  }
}
