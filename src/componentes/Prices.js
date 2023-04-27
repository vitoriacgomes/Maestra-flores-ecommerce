import React from 'react'
import floranjo from "./img/flor-anjo-branco.jpg"

const Prices = () => {
  return (
    <div className='prices'>
      <div className='container'>
        <div className='row'>
            <div className='col-4'>
                <div className='price'>
                    <div className='price-img'>
                        <img src={floranjo}/>
                    </div>
                    <h1 className='price-head'>Flor Anjo Branco</h1>
                    <p className='price-texto'>Otima para climas quentes. 
                        Sempre florece no verão e gosta de terra umida</p>
                    <p className='price-rs'>30,00</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Prices
