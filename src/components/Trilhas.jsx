import React from 'react';
import '../styles/Trilhas.css';
import heroImage from '../assets/trilha-ecologica.png';


const Trilhas = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-content">
        <div className="how-it-works-image">
          <img src={heroImage} alt="Imagem ilustrativa" />
        </div>
        <div className="how-it-works-text">
          <h2 className="section-title">🌿 Trilhas Ecológicas</h2>
          <p className="section-description">
          Explore a natureza exuberante de Fagundes por meio de trilhas que revelam paisagens únicas,
           fauna local e momentos de paz em meio ao verde. Perfeitas para quem ama aventura e ecoturismo.
          </p>
          <div className="hero-buttons">
          <button className="hero-button">Saiba Mais</button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Trilhas;
