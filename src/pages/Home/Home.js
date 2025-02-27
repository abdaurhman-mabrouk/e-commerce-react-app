import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/productsService';
import ProductsList from '../../components/product/ProductsList/ProductsList';
import './Home.css';
import CategoriesList from '../../components/categories/CategoriesList/CategoriesList';
import OffersList from '../../components/offers/OffersList/OffersList';

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

      <div className="offers-list-div list-div div">
        <OffersList />
      </div>

      <div className="categories-list-div list-div div">
        <CategoriesList />
      </div>

      <div className="product-list-div list-div div">
        <ProductsList products={productsList} />
      </div>
    </div>
  );
}

export default Home;
