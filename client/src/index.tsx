import 'antd/dist/antd.css';
import 'font-awesome/css/font-awesome.css';
import 'highlight.js/styles/github.css';

import highlight from 'highlight.js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {App} from './views';

highlight.initHighlightingOnLoad();

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
export * from './services';
export * from './theme';
export * from './ui';
export * from './views';
export * from './utils';
export * from './components';
export * from './store';
export * from './entrances';
