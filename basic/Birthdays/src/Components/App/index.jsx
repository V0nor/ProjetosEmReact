import React, { useState } from 'react';
import Data from '../Data';
import { List } from '../List';

export function App() {
  const [person, setPerson] = useState(Data);
  return (
    <div>
      <h1>{person.length} Pessoas</h1>
      <List peoples={person} />
      <button
        onClick={() => {
          setPerson([]);
        }}>
        Limpar
      </button>
    </div>
  );
}
