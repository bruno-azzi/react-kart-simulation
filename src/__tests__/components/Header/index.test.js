import React from 'react';
import { screen, render } from '@testing-library/react';

import Header from '../../../components/Header';

describe('Render header component', () => {
  it('render the title and logo', () => {
    render(<Header />);

    const title = screen.getByText('Brasfoot but for racing');
    expect(title).toBeInTheDocument();

    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });
});
