import React from 'react';
import { render } from '@testing-library/react';

import Format from './format';

describe('Format', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Format />);
    expect(baseElement).toBeTruthy();
  });
});
