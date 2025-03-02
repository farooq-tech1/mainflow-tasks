import React from 'react';
import './ProductCard.css'; // Create styles in this CSS file

const ProductCard = ({ title, description, image, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Price: Rs.{price}</strong></p>
      <button className="buy-button">Buy Now</button>
    </div>
  );
};

export default ProductCard;
