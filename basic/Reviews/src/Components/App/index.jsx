import React from 'react';
import './style.css';
import { Review } from '../Review';

export function App() {
  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>Depoimentos</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </div>
    </main>
  );
}
