import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trilhas from './components/Trilhas';
import Festas from './components/Festas';
import Gastronomia from './components/Gastronomia';
import Hospedagem from './components/Hospedagem';
import Visitar from './components/Visitar';
import Footer from './components/Footer';
import './App.css';




function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Trilhas />
      <Festas/>
      <Gastronomia/>
      <Hospedagem/>
      <Visitar/>
      <Footer/>
    </div>
  );
}

export default App;
