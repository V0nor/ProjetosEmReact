import React from 'react';
import './style.css';
export function Loading() {
  return (
    <section>
      <div className="loading__container">
        <h1 className="loading__text">Carregando</h1>
        <span className="circle one">.</span>
        <span className="circle second">.</span>
        <span className="circle third">.</span>
      </div>
    </section>
  );
}
