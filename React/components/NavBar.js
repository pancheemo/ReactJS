// src/components/NavBar.js
import React from 'react';
import CartWidget from '../components/Cartwidget';
import logo from '../img/logo.png'; 

const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="Logo de Mi Tienda" style={{ width: '50px' }} />
      <h1>Mi Tienda</h1>
      <div>
        <a href="/">Inicio</a>
        <a href="/productos">Productos</a>
        <a href="/contacto">Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
