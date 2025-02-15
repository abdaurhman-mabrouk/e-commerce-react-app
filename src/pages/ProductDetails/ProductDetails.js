// filepath: /D:/Programming/Projects/React.js/e-commerce-react-app/src/pages/ProductDetails/ProductDetails.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = {
    id,
    name: 'Sample Product',
    price: 100,
    // Add other product details here
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
