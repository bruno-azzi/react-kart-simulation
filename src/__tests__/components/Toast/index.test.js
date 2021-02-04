import { render, screen } from '@testing-library/react';
import { ToastContainer } from 'react-toastify';

import { ShowErrorToast, ShowSuccessToast } from '../../../components/Toast';

describe('Render Toast component', () => {
  describe('when showing error message', () => {
    it('render the toast', async () => {
      render(<ToastContainer />);
      const errorMessage = 'whoops!, something went wrong.';

      ShowErrorToast(errorMessage);

      const toast = await screen.findByText(errorMessage);

      expect(toast).toBeInTheDocument();
    });
  });

  describe('when showing success message', () => {
    it('render the toast', async () => {
      render(<ToastContainer />);
      const successMessage = 'Race started!';

      ShowSuccessToast(successMessage);

      const toast = await screen.findByText(successMessage);

      expect(toast).toBeInTheDocument();
    });
  });
});
