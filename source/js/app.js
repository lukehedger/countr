import React from 'react';
import Root from './container/Root';
import { history } from 'react-router/lib/BrowserHistory';

React.render(<Root history={history} />, document.getElementById('root'));
