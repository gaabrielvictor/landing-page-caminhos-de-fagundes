import React from 'react';
import '../styles/Festas.css';
import FestasImg from '../assets/festas.png';


const Festas = () => {
    return (
        <section className="festas-criteria">
            <div className="festas-content">
                <h2 className="festas-title">🎉 Festas Tradicionais</h2>
                <p className="festas-description">
                    Viva a cultura de Fagundes nas festas populares que celebram a fé, a música e a gastronomia regional.
                    Uma experiência autêntica e vibrante que conecta visitantes à alma da cidade.
                </p>
                <div className="hero-buttons">
                    <button className="hero-button">Saiba Mais</button>
                </div>
            </div>
            <div className="festas-image">
                <img
                    src={FestasImg}
                    alt="Festas Tradicionais em Fagundes"
                />
            </div>
        </section>
    );
};

export default Festas;
