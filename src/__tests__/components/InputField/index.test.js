import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';

import InputField from '../../../components/InputField';

const type = 'text';
const placeholder = 'My Placeholder';
const value = '';
const maxLength = 10;
const mockOnChange = jest.fn();
const errors = [{ id: 'required', message: 'required field' }];

describe('InputField Component', () => {
  describe('when render input field component', () => {
    it('render all the props', () => {
      render(
        <InputField
          type={type}
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          onChange={mockOnChange}
        />,
      );

      const input = screen.getByPlaceholderText(placeholder);

      expect(input).toHaveProperty('type', type);
      expect(input).toHaveAttribute('maxLength', String(maxLength));

      fireEvent.change(input, { target: { value: '12345' } });

      expect(mockOnChange).toHaveBeenCalled();
    });
  });

  describe('when input has some error', () => {
    it('show error message with error class', () => {
      render(
        <InputField
          type={type}
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          onChange={mockOnChange}
          errors={errors}
        />,
      );

      const errorMessage = screen.getByText(errors[0].message);
      expect(errorMessage).toBeInTheDocument();

      const inputWrapper = screen.getByTestId('inputWrapper');
      expect(inputWrapper).toHaveClass('error');
    });
  });
});
