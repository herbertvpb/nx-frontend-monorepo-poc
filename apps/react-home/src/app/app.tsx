import React from 'react';

import { ReactComponent as Logo } from './logo.svg';

import { Route, Link } from 'react-router-dom';

import { SearchInput } from '@nx-frontend-monorepo-poc/club-ui';
import { numberToReal } from '@nx-frontend-monorepo-poc/club-utils';

import { StyledApp } from './styles';

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
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            <h1>Home</h1>
            <strong>External search component:</strong>
            <SearchInput />
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <h1>Page 2</h1>
        <span>Value formatted: {numberToReal('2.5')}</span>
          </div>
        )}
      />
    </StyledApp>
  );
};

export default App;
