import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import './ProductDetail.css'
const ProductDetail = () => {
  const { id } = useParams();
  console.log("Product ID:", id);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h4>${product.price.toFixed(2)}</h4>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;