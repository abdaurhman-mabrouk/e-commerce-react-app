import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../../../services/categoriesService';
import './CategoriesList.css';

function CategoriesList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className="categories-list">
      {categories.map((category) => (
        <li className="categories-item" key={category}>
          {category}
        </li>
      ))}
    </ul>
  );
}

export default CategoriesList;
