import React from 'react';
import floranjo from "./img/flor-anjo-branco.jpg";
import tuliparosa from "./img/tulipa-rosa.jpg";
import rosavermelha from "./img/rosa-vermelha.jpg";
import novehoras from "./img/flor-nove-horas.jpg";

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

            <div className='col-4'>
                <div className='price'>
                    <div className='price-img'>
                        <img src={tuliparosa}/>
                    </div>
                    <h1 className='price-head'>Tulipa Rosa</h1>
                    <p className='price-texto'>Otima para climas quentes. 
                        Sempre florece no verão e gosta de terra umida</p>
                    <p className='price-rs'>50,00</p>
                </div>
            </div>

            <div className='col-4'>
                <div className='price'>
                    <div className='price-img'>
                        <img src={rosavermelha}/>
                    </div>
                    <h1 className='price-head'>Rosa Vermelha</h1>
                    <p className='price-texto'>Otima para climas quentes. 
                        Sempre florece no verão e gosta de terra umida</p>
                    <p className='price-rs'>40,00</p>
                </div>
            </div>

            <div className='col-4'>
                <div className='price'>
                    <div className='price-img'>
                        <img src={novehoras}/>
                    </div>
                    <h1 className='price-head'>Nove Horas Laranja</h1>
                    <p className='price-texto'>Otima para climas quentes. 
                        Sempre florece no verão e gosta de terra umida</p>
                    <p className='price-rs'>20,00</p>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Prices
