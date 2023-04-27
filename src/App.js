import React from 'react';
import './App.css';
import Header from "./componentes/Header";
import Sobre from "./componentes/Sobre";
import Dados from "./componentes/Dados";
import Prices from "./componentes/Prices";

function App() {
  return (
    <div>
      <Header/>
      <Sobre/>
      <Dados/>
      <Prices/>
    </div>
  );
}

export default App;
