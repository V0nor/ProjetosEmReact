import React from 'react';
import { Tour } from '../Tour';
import './style.css';

export const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div>
        <h2 className="title">Turismo</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
};
