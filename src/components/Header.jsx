import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Caminhos de Fagundes" />
      </div>
      <button className="plano-button">Crie seu Plano de Turismo</button>
    </header>
  );
};

export default Header;
