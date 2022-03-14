import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { GlobalStyle } from './styles/global';
import { Painel } from './components/Painel';

function App() {
  
  return (
    <>
      <Painel />
      <GlobalStyle />
    </>
  );
}

export default App;
