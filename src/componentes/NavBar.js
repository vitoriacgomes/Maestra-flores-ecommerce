import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-texto'>
            <ul className='navbar-ul'>
                <li><a href='home'>Home</a></li>
                <li><a href='produtos'>Produtos</a></li>
                <li><a href='carrinho'>Carrinho</a></li>
                <li><a href='contato'>Nosso Contato</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
