import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';

import Button from '../../../components/Button';

const btnText = 'My Button';
const type = 'submit';
const mockClick = jest.fn();

describe('Button Component', () => {
  describe('render the button with its props', () => {
    it('render enabled button with text and type that executes its click function', () => {
      render(<Button label={btnText} type={type} onClick={mockClick} />);

      const btn = screen.getByText(btnText);
      expect(btn).toBeInTheDocument();
      expect(btn).toHaveProperty('type', type);

      fireEvent.click(btn);
      expect(mockClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('when button is disabled', () => {
    it('wont call its click function', () => {
      render(<Button label={btnText} disabled onClick={mockClick} />);

      const btn = screen.getByText(btnText);
      expect(btn).toBeInTheDocument();
      expect(mockClick).not.toHaveBeenCalled();
    });
  });
});
