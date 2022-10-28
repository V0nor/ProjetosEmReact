import React from 'react';
import './style.css';

export const Menu = ({ items }) => {
  return (
    <div className="menu">
      {items.map((menuItem) => {
        const { id, title, img, price, desc } = menuItem;
        return (
          <article key={id} className="menu__container">
            <img className="menu__img" src={img} alt={title} />
            <header className="menu__info">
              <h4 className="menu__title">{title}</h4>
              <h5 className="menu__price">R$ {price}</h5>
            </header>
            <div className="underline__text"></div>
            <p className="menu__text">{desc}</p>
          </article>
        );
      })}
    </div>
  );
};
