import React from 'react';
import './style.css';
const List = ({ peoples }) => {
  return (
    <div className="person__container">
      {peoples.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img className="person__img" src={image} alt="Perfil"></img>
            <div className="person__content">
              <h3 className="person__name">{name}</h3>
              <p className="person__age">{age} anos</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
