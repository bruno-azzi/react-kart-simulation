import React from 'react';
import { screen, render } from '@testing-library/react';

import Loader from '../../../components/Loader';

describe('Render Loader component', () => {
  describe('when loaded', () => {
    it('render the spinner', () => {
      render(<Loader />);

      const loader = screen.getByTestId('loader');
      expect(loader).toBeInTheDocument();

      const loaderWrapper = screen.getByTestId('loaderWrapper');
      expect(loaderWrapper).toBeInTheDocument();
    });
  });

  describe('if has absolute prop', () => {
    it('render loaderWrapper with absolute classname', () => {
      render(<Loader absolute />);

      const loader = screen.getByTestId('loader');
      expect(loader).toBeInTheDocument();

      const loaderWrapper = screen.getByTestId('loaderWrapper');
      expect(loaderWrapper).toBeInTheDocument();
      expect(loaderWrapper).toHaveClass('absolute');
    });
  });
});
