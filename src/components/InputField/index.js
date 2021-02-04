import React from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';

import './styles.scss';

const InputField = React.forwardRef(
  (
    { type, id, placeholder, value, maxLength, onChange, errors, testId },
    ref,
  ) => (
    <div
      data-testid="inputWrapper"
      className={`input-wrapper ${errors.length ? 'error' : ''}`}
    >
      <input
        data-testid={testId}
        ref={ref}
        className="input-field"
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
      />

      <div className="errors-wrapper">
        {errors && errors.length
          ? errors.map((error) => (
              <p key={error.id} className="input-error">
                {error.message}
              </p>
            ))
          : null}
      </div>
    </div>
  ),
);

InputField.propTypes = {
  testId: string,
  id: string,
  type: string,
  placeholder: string,
  value: string,
  onChange: func,
  maxLength: number,
  errors: arrayOf(
    shape({
      id: string,
      message: string,
    }),
  ),
};

InputField.defaultProps = {
  testId: '',
  id: '',
  type: 'text',
  placeholder: '',
  value: '',
  maxLength: null,
  onChange: null,
  errors: [],
};

export default InputField;
