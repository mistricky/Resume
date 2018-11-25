import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {App} from './views';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
export * from './services';
export * from './theme';
export * from './ui';
export * from './views';
export * from './utils';
