import React from 'react'
import caminhao from "./img/caminhao-de-flores.jpg"

const Contato = () => {
  return (
    <div className='contato'>
        <h1><span>nosso contato</span></h1>
        <div className='contato-row'>
            <form>
                <input type='text' placeholder=' nome' className='box'></input>
                <input type='email' placeholder=' e-mail' className='box'></input>
                <input type='number' placeholder=' número' className='box'></input>
                <textarea name='' className='box' placeholder='mensagem' id='' cols="30" rows="10"></textarea>
                <input type='submit' value="enviar" className='btn btn-contato'></input>
            </form>
            <div className='image'>
                <img className='img-cont' src={caminhao}/>
            </div>
        </div>
    </div>
  )
}

export default Contato;
