import React, { useState } from 'react';
import './style.css';
export const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="tour">
      <img className="tour__img" src={image} alt={name}></img>
      <footer>
        <div className="tour__info">
          <h4>{name}</h4>
          <h5>R$ {price}</h5>
        </div>
        <p className="tour__text">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <br />
          <button
            className="readmore__btn"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? 'Leia menos' : 'Leia mais'}
          </button>
        </p>
        <button
          className="tour__btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          Não estou interessado
        </button>
      </footer>
    </article>
  );
};
