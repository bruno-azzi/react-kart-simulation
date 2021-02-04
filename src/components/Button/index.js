import React from 'react';
import { bool, func, string } from 'prop-types';

import './styles.scss';

const Button = ({ label, type, onClick, disabled }) => (
  <button
    className="main-btn"
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: string,
  type: string,
  onClick: func,
  disabled: bool,
};

Button.defaultProps = {
  label: '',
  type: 'button',
  onClick: null,
  disabled: false,
};

export default Button;
