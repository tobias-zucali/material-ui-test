import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import App from './App';
import theme from './theme';
import './index.css';

ReactDOM.render((
  <MuiThemeProvider theme={theme}>
    <HashRouter>
      <App />
    </HashRouter>
  </MuiThemeProvider>
), document.getElementById('root'))
