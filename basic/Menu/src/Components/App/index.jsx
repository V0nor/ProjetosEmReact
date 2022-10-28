import React, { useState } from 'react';
import { Menu } from '../Menu';
import { Categories } from '../Categories';
import Items from '../Data';
import './style.css';

const allCategories = ['all', ...new Set(Items.map((item) => item.category))];

export function App() {
  const [menuItems, setMenuItems] = useState(Items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(Items);
      return;
    }
    const newItems = Items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section>
        <div>
          <h2 className="title">Cardápio</h2>
          <div className="underline"></div>
        </div>
        {<Categories categories={categories} filterItems={filterItems} />}
        <Menu items={menuItems} />
      </section>
    </main>
  );
}
