import React from 'react';
import categories from '../../../data/categories';
import './CategoriesList.css';

function CategoriesList() {
  return (
    <ul className="categories-list">
      {categories.map((category) => (
        <li className="categories-item" key={category.id}>
          {category.name}
        </li>
      ))}
    </ul>
  );
}

export default CategoriesList;
