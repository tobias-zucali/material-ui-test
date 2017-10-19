import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';

import App from './App';
import theme from './theme';
import './index.css';

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>
), document.getElementById('root'))
