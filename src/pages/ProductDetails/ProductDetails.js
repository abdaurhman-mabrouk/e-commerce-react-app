import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { fetchProductById } from '../../services/productsService';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        setError('Error fetching product details');
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h1 className="detail-title">{product.title}</h1>
      <img src={product.image} alt={product.title} className="detail-image" />
      <p className="detail-price">Price: ${product.price}</p>
      <p className="detail-description">{product.description}</p>
      <p className="detail-category">{product.category}</p>
      <p className="detail-rating">
        <p className="detail-rate">Rate: {product.rating.rate}</p>
        <p className="detail-rate-count">Rating Count{product.rating.count}</p>
      </p>
      <button className="detail-button" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
