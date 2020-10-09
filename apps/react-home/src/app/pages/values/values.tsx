import React from 'react';
import { numberToReal } from '@nx-frontend-monorepo-poc/club-utils';

export const Values = () => {
  return (
    <div>
      <h1>Page 2</h1>
      <span>Value formatted: {numberToReal('2.5')}</span>
    </div>
  );
};

export default Values;
