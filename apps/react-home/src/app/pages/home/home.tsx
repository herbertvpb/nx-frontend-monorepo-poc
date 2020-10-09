import React from 'react';

import { SearchInput } from '@nx-frontend-monorepo-poc/club-ui';

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <strong>External search component:</strong>
      <SearchInput />
    </div>
  );
};

export default Home;
