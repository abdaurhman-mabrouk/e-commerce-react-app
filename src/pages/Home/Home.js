import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/productService';
import ProductsList from '../../components/product/ProductsList/ProductsList';
import './Home.css';

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
    <div className="home-div">
      <h1>Welcome to Our E-Commerce Store</h1>
      <div className="product-list">
        <ProductsList />
      </div>
    </div>
  );
}

export default Home;
