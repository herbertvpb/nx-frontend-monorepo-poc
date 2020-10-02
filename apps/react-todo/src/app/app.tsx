import React from 'react';

import { ReactComponent as Logo } from './logo.svg';

import { StyledApp } from './styles';
import { zeroPad } from '@nx-frontend-monorepo-poc/club-utils';
import { TodoItem } from '@nx-frontend-monorepo-poc/club-ui';

const tasks = [
  { id: 1, name: 'Estudar monorepo' },
  { id: 2, name: 'Estudar react' },
  { id: 3, name: 'Estudar nx' }
];

export const App = () => {
  return (
    <StyledApp>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>REACT-TODO</h1>
      </header>
      <main>
        <h2>User {zeroPad(15, 5)}</h2>
        <div>
          {tasks.map((task) => {
            return (
              <TodoItem
                key={task.id}
                text={task.name}
              />
            )
          })}
        </div>
      </main>
    </StyledApp>
  );
};

export default App;
