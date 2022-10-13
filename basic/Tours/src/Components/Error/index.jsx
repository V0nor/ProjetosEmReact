import React from 'react';
import './style.css';

export function Error() {
  return (
    <section>
      <div className="error__container">
        <h1 className="error__text">ERRO!</h1>
        <h3 className="error__info">
          Ocorreu um erro ao carregar a API, verifique o console, para mais
          informações ou tente recarregar a página
        </h3>
      </div>
    </section>
  );
}
