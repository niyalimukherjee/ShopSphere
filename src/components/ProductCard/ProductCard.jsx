import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // optional styling file

const ProductCard = React.memo(({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="product-image" />
        <h4>{product.title}</h4>
        <p>${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
});

export default ProductCard;