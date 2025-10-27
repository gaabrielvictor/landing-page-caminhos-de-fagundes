import React from 'react';
import '../styles/Visitar.css';
import VisitarImg from '../assets/cidade.png'

const Visitar = () => {
    return (
        <section className="visitar-section">
            <div className="visitar-image">
                <img src={VisitarImg} />
            </div>
            <div className="visitar-content">
                <h2 className="visitar-title">✨ Por que visitar Fagundes?</h2>
                <p className="visitar-text">
                    Fagundes é o destino perfeito para quem busca cultura, natureza e hospitalidade. 
                    Uma cidade que encanta pela simplicidade, pelas histórias e pela força de sua identidade local.
                </p>
            </div>
        </section>
    );
};

export default Visitar;
