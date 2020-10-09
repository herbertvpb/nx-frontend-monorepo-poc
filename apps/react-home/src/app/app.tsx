import React from 'react';

import { ReactComponent as Logo } from './logo.svg';

import { Route, Link } from 'react-router-dom';

import { StyledApp } from './styles';
import { Home } from './pages/home/home';
import { Values } from './pages/values/values';

export const App = () => {
  return (
    <StyledApp>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>REACT-HOME</h1>
      </header>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/values">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route path="/" exact render={Home}/>
      <Route path="/values" exact render={Values}/>
    </StyledApp>
  );
};

export default App;
