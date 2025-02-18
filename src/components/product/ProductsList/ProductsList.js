import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../../services/productsService';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsList.css';

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="products-list-div">
      <h1>Our Products List</h1>
      <div className="product-list-card">
        {(products || []).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
