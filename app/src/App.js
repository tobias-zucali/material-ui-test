import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Testcase1 from './components/Testcase1';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="react" />
        </header>
        <nav className="App-nav">
          <Link to="/testcase1">Testcase1</Link>{' '}
        </nav>
        <div>
          <Route path="/testcase1" component={Testcase1}/>
        </div>
      </div>
    );
  }
}

export default App;
