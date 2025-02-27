// src/components/product/ProductCard/ProductCard.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card" title={product.description}>
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />

        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <p className="detail-category">{product.category}</p>
        <p className="detail-rating">
          <p className="detail-rate">Rate: {product.rating.rate}</p>
          <p className="detail-rate-count">
            Rating Count{product.rating.count}
          </p>
        </p>
      </Link>
      <button className="product-button" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
