import React from 'react';
import '../styles/Gastronomia.css';
import GastronomiaImg from '../assets/gastronomia.png'

const Gastronomia = () => {
    return (
        <section className="gastronomia-section">
            <div className="gastronomia-image">
                <img src={GastronomiaImg} />
            </div>
            <div className="gastronomia-content">
                <h2 className="gastronomia-title">🍽️ Gastronomia Local</h2>
                <p className="gastronomia-text">
                    Sabores que contam histórias! Descubra pratos típicos preparados com carinho por moradores,
                    em restaurantes e pousadas que valorizam a culinária regional.
                </p>
                <div className="hero-buttons">
                    <button className="hero-button">Saiba Mais</button>
                </div>
            </div>
        </section>
    );
};

export default Gastronomia;
