import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Router>
      <div className='navbar'>
        <div className='navbar-texto'>
          <ul className='navbar-ul'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='./Prices.js'>Produtos</Link></li>
            <li><Link to='/carrinho'>Carrinho</Link></li>
            <li><Link to='/contato'>Nosso Contato</Link></li>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default NavBar;