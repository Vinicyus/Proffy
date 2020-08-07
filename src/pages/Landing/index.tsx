import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assests/images/logo.svg'
import landingImg from '../../assests/images/landing.svg'

import studyIcon from '../../assests/images/icons/study.svg'
import giveClassesIcon from '../../assests/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assests/images/icons/purple-heart.svg'

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua Plataforma de estudos online.</h2>
        </div>

        <img 
          src={landingImg} 
          alt="Plataforma de estudos" 
          className="hero-image" 
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar" />
            Dar Aulas
          </Link>
        </div>

        <span className="total-conections">
          Toal de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
        </span>
      </div>
    </div>
  );
}

export default Landing;