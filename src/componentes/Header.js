import React from 'react';
import NavBar from './NavBar';

const Header = () => {
  return (
    <div className='banner'>
        <NavBar />
        <div className='banner_content'>
            <div className='container'>
                <div className='banner-texto'>
                <h3>Flores Devlivery</h3>
                <h1>MAESTRA FLORES</h1>
                <p>A melhores flores do mercado você encontra aqui. Atuamos em toda area metropolitana</p>
                <div className='banner-btn'>
                    <a href='' className='btn btn-smart'>Entrega já</a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
