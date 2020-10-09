import React from 'react';
import { render } from '@testing-library/react';

import Values from './values';

describe('Values', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Values />);
    expect(baseElement).toBeTruthy();
  });
});
