import React from 'react';
import '../styles/Hospedagem.css';
import EvalutionImg from '../assets/hospedagem.png';


const EvaluationCriteria = () => {
    return (
        <section className="evaluation-hospedagem">
            <div className="hospedagem-content">
                <h2 className="hospedagem-title">🏡 Hospedagem com Charme</h2>
                <p className="hospedagem-description">
                    Pousadas acolhedoras e hospedagens familiares oferecem conforto e hospitalidade,
                     tornando sua estadia em Fagundes ainda mais especial.
                </p>
                <div className="hero-buttons">
                    <button className="hero-button">Saiba Mais</button>
                </div>
            </div>
            <div className="hospedagem-image">
                <img
                    src={EvalutionImg}
                    alt="Critérios de Avaliação"
                />
            </div>
        </section>
    );
};

export default EvaluationCriteria;
