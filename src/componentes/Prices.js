import React from 'react';    
import { AiFillHeart } from 'react-icons/ai';   
import floranjo from "./img/flor-anjo-branco.jpg";
import tuliparosa from "./img/tulipa-rosa.jpg";
import rosavermelha from "./img/rosa-vermelha.jpg";
import novehoras from "./img/flor-nove-horas.jpg";
import leaorosa from "./img/leao-rosa.jpg";
import nuvembranca from "./img/nuvem-branca.jpg";
import nuvemroxa from "./img/nuvem-roxa.jpg";
import orquidiaroxa from "./img/orquidia-roxa.jpg";

const Prices = () => {
  return (
    <div className='prices' id='produtos'>
      <div className='container'>
        <div className='row'>
            <div className='col-3'>
                <div className='price'>
                    <div className='price-img'>
                        <img src={floranjo}/>
                    </div>
                    <h1 className='price-head'>Flor Anjo Branco</h1>
                    <p className='price-texto'>Otima para climas frios. 
                        Sempre florece no outono e gosta de terra umida</p>
                    <div className='icons'>
                        <a className='heart'><AiFillHeart className='heart-icon' /></a>
                        <a className='add-car'> adicione ao carrinho</a>
                    </div>
                    <p className='price-rs'> R$ 30,00</p>
                </div>
            </div>

            <div className='col-3'>
                <div className='price'>
                    <div className='price-img'>
                        <img src={tuliparosa}/>
                    </div>
                    <h1 className='price-head'>Tulipa Rosa</h1>
                    <p className='price-texto'>Otima para climas frios. 
                        Sempre florece no outono e gosta de terra umida</p>
                    <div className='icons'>
                        <a className='heart'><AiFillHeart className='heart-icon' /></a>
                        <a className='add-car'> adicione ao carrinho</a>
                    </div>
                    <p className='price-rs'> R$ 50,00</p>
                </div>
            </div>

            <div className='col-3'>
                <div className='price'>
                    <div className='price-img'>
                        <img src={rosavermelha}/>
                    </div>
                    <h1 className='price-head'>Rosa Vermelha</h1>
                    <p className='price-texto'>Otima para todos os climas. 
                      Nao gosta de terra muita agua.</p>
                    <div className='icons'>
                        <a className='heart'><AiFillHeart className='heart-icon' /></a>
                        <a className='add-car'> adicione ao carrinho</a>
                    </div>
                    <p className='price-rs'> R$ 40,00</p>
                </div>
            </div>

            <div className='col-3'>
                <div className='price'>
                    <div className='price-img'>
                        <img src={novehoras}/>
                    </div>
                    <h1 className='price-head'>Nove Horas </h1>
                    <p className='price-texto'>Otima para climas quentes. 
                        Gosta de terra umida</p>
                    <div className='icons'>
                        <a className='heart'><AiFillHeart className='heart-icon' /></a>
                        <a className='add-car'> adicione ao carrinho</a>
                    </div>
                    <p className='price-rs'> R$ 20,00</p>
                </div>
            </div>

            <div className='col-3'>
                <div className='price'>
                    <div className='price-img'>
                        <img src={leaorosa}/>
                    </div>
                    <h1 className='price-head'>Leao Rosa</h1>
                    <p className='price-texto'>Otima para climas quentes. 
                        Gosta de terra umida</p>
                    <div className='icons'>
                        <a className='heart'><AiFillHeart className='heart-icon' /></a>
                        <a className='add-car'> adicione ao carrinho</a>
                    </div>
                    <p className='price-rs'> R$ 35,00</p>
                </div>
            </div>            

            <div className='col-3'>
                <div className='price'>
                    <div className='price-img'>
                        <img src={nuvembranca}/>
                    </div>
                    <h1 className='price-head'>Nuvem Branca</h1>
                    <p className='price-texto'>Otima para todos os climas. 
                    Facil de cuidar.</p>
                    <div className='icons'>
                        <a className='heart'><AiFillHeart className='heart-icon' /></a>
                        <a className='add-car'> adicione ao carrinho</a>
                    </div>
                    <p className='price-rs'> R$ 15,00</p>
                </div>
            </div> 

            <div className='col-3'>
                <div className='price'>
                    <div className='price-img'>
                        <img src={nuvemroxa}/>
                    </div>
                    <h1 className='price-head'>Nuvem Roxa</h1>
                    <p className='price-texto'>Otima para todos os climas. 
                    Não precisa de muitos cuidados. </p>
                    <div className='icons'>
                        <a className='heart'><AiFillHeart className='heart-icon' /></a>
                        <a className='add-car'> adicione ao carrinho</a>
                    </div>
                    <p className='price-rs'> R$ 15,00</p>
                </div>
            </div> 

            <div className='col-3'>
                <div className='price'>
                    <div className='price-img'>
                        <img src={orquidiaroxa}/>
                    </div>
                    <h1 className='price-head'>Orquidea Roxa</h1>
                    <p className='price-texto'>Otima para climas frios. 
                        Gosta de terra umida.</p>
                    <div className='icons'>
                        <a className='heart'><AiFillHeart className='heart-icon' /></a>
                        <a className='add-car'> adicione ao carrinho</a>
                    </div>
                    <p className='price-rs'> R$ 54,00</p>
                </div>
            </div> 

        </div>
      </div>
    </div>
  )
}

export default Prices
