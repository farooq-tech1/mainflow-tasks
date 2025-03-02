import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css'; // Create the CSS styles

const ProductList = () => {
  const products = [
    {
      title: 'Flippo pro',
      description: 'Latest model with advanced features and sleek design.',
      image: 'Floppomax.jpg',
      price: 59999,
    },
    {
      title: 'Flippo ultra',
      description: 'Affordable smartphone with a high-quality camera.',
      image: 'path_to_product_image_y',
      price: 78999,
    },
    {
    title: 'Flippo max',
      description: 'premium smartphone with a high-quality camera and fast processr .',
      image: 'path_to_product_image_y',
      price: 89999,
    },

    // Add more products as needed
  ];

  return (
    <section className="product-list" id="products">
      <h2>Our Products</h2>
      <div className="product-cards">
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
