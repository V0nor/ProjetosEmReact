import React, { useState } from 'react';
import './style.css';
import { reviews } from '../Data';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';

export const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];
  console.log(reviews);
  return (
    <article className="review">
      <div className="review__container">
        <img className="review__img" src={image} alt={name} />
        <span className="review__icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="review__name">{name}</h4>
      <p className="review__job">{job}</p>
      <p className="review__text">{text}</p>
      <div className="review__content">
        <button className="review__btn btn--prev">
          <FaArrowLeft />
        </button>
        <button className="review__btn btn--next">
          <FaArrowRight />
        </button>
      </div>
      <button className="random__btn">Aleatório</button>
    </article>
  );
};
