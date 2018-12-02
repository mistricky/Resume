import Axios from 'axios';

import {REQUEST_BASE_URL} from 'src/constant';

Axios.defaults.baseURL = REQUEST_BASE_URL;

export class HTTP {}
