import React from 'react';
import { bool } from 'prop-types';

import { ReactComponent as Loading } from '../../assets/loader.svg';

import './styles.scss';

const Loader = ({ absolute }) => (
  <div
    className={`loader-wrapper ${absolute ? 'absolute' : ''}`}
    data-testid="loaderWrapper"
  >
    <Loading data-testid="loader" />
  </div>
);

Loader.propTypes = {
  absolute: bool,
};

Loader.defaultProps = {
  absolute: false,
};

export default Loader;
