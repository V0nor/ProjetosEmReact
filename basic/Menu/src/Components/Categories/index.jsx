import React from 'react';
import './style.css';
export const Categories = ({ categories, filterItems }) => {
  return (
    <div className="category__container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="category__btn"
            key={index}
            onClick={() => {
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
