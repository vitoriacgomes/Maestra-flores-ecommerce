import React from 'react';
import './App.css';
import Header from "./componentes/Header";
import Sobre from "./componentes/Sobre";
import Dados from "./componentes/Dados";
import Prices from "./componentes/Prices";
import Footer from "./componentes/Footer";
import Contato from './componentes/Contato';

function App() {
  return (
    <div>
      <Header id="home"/>
      <Sobre id=""/>
      <Dados id=""/>
      <Prices id="produtos"/>
      <Contato/>
      <Footer/>
    </div>
  );
}

export default App;
