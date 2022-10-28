import React, { useState } from 'react';
import { people } from '../Data';
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from 'react-icons/fa';
import './style.css';

export const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

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
        <button className="review__btn btn--prev" onClick={prevPerson}>
          <FaArrowLeft />
        </button>
        <button className="review__btn btn--next" onClick={nextPerson}>
          <FaArrowRight />
        </button>
      </div>
      <button className="random__btn" onClick={randomPerson}>
        Aleatório
      </button>
    </article>
  );
};
