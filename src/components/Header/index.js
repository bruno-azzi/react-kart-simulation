import React from 'react';

import './styles.scss';

import { ReactComponent as Logo } from '../../assets/racer.svg';

const Header = () => (
  <header className="main-header">
    <Logo className="logo" data-testid="logo" />
    <h1 className="main-title">Brasfoot but for racing</h1>
  </header>
);

export default Header;
