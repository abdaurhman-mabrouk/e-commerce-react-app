import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/productService';
import ProductsList from '../../components/product/ProductsList/ProductsList';
import './Home.css';
import CategoriesList from '../../components/categories/CategoriesList/CategoriesList';

function Home() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProductsList(data);
    };
    getProducts();
  }, []);

  return (
    <div className="home-div home div">
      <h1>Welcome to Our E-Commerce Store</h1>

      <div className="categories-list-div list-div div">
        <CategoriesList />
      </div>

      <div className="product-list-div list-div div">
        <ProductsList />
      </div>
    </div>
  );
}

export default Home;
