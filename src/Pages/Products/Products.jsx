import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';
import homeImg from '../../assets/home.jpg'; // Import the default image
import { productsData } from '../../data/products';

const Products = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page">    
      <div className="search-container">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Search for products..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>
      <div className="products-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => handleCardClick(product.id)} // Keep the original logic
              role="button"
              tabIndex="0"
              onKeyPress={(e) => e.key === 'Enter' && handleCardClick(product.id)}
            >
              <div className="product-img-box">
                <img src={product.img} alt={product.name} className="product-img" onError={e => { e.target.src = homeImg; }} />
              </div>
              <div className="product-name">{product.name}</div>
            </div>
          ))
        ) : (
          <p className="no-products-found">No products found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default Products;