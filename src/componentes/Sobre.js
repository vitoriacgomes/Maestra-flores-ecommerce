import React from 'react'
import flores from "./flores-sobre.jpeg"

const Sobre = () => {
  return (
    <div className='sobre'>
      <div className='container'>
        <div className='col-6 p-25'>
          <h3>Sobre Nós</h3>
          <h1>BEM-VINDO AO MAESTRA FLORES</h1>
          <p>Aqui nos buscamos ter o maior sistema de gestão de qualidade em noassas flores. Elas são escolhidas a mão, para você presentear quem mais ama.</p>
          <div className='sobre-btn'>
            <a className='btn btn-smart'>Leia mais</a>
          </div>
          </div>
          <div className='col-6'>
            <div className='sobre-img'><img src={flores}/></div>
          </div>
      </div>
    </div>
  )
}

export default Sobre
