import React from 'react';
import { render } from '@testing-library/react';

import App from '../App';

describe('Render app component', () => {
  it('renders the app component', () => {
    render(<App />);
  });
});
