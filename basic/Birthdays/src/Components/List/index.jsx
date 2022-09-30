import React from 'react';

export const List = ({ peoples }) => {
  return (
    <div>
      {peoples.map((person) => {
        const { id, age, name } = person;
        return (
          <div key={id} className="person__container">
            <h1>{name}</h1>
            <p>{age}</p>
          </div>
        );
      })}
    </div>
  );
};
