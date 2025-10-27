import React from 'react';
import '../styles/Hero.css';
import heroImage from '../assets/Pedra-de-santo-antonio.png';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          🏞️ Pedra de Santo Antônio
        </h1>
        <p className="hero-subtitle">
          Um dos símbolos de Fagundes, essa formação rochosa impressiona pela beleza natural e pelas
           lendas que envolvem sua origem. Ideal para trilhas, contemplação e fotos incríveis.
        </p>
        <div className="hero-buttons">
          <button className="hero-button">Saiba Mais</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Ilustração do Hero" />
      </div>
    </section>
  );
};

export default Hero;
