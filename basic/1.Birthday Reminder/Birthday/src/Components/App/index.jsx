import React, { useState } from 'react';
import People from '../People/';
import List from '../List/';
import '../App/style.css';
export function App() {
  const [birthday, setBirthday] = useState(People);
  return (
    <main>
      <section className="container">
        <h3 className="container__title">
          {birthday.length} Aniversariantes hoje
        </h3>
        <List peoples={birthday} />
        <button className="btn" onClick={() => setBirthday([])}>
          Limpar tudo
        </button>
      </section>
    </main>
  );
}
