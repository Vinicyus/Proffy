import React from 'react';

import './styles.css';

import whatsappIcon from '../../assests/images/icons/whatsapp.svg';

function TeacherItem(){
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/7808844?s=460&u=147deb337b699f5373b1fcc23fc726e2a9c75897&v=4" alt="Vinicyus Oliveira" />
        <div>
          <strong>Vinicyus Oliveira</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        TESTE blblabla
            <br />
            uedhvuoehovijoief eifjie e8fje e8orf ee8rfe 8ei
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$20,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
