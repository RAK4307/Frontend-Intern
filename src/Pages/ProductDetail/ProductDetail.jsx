import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import homeImg from '../../assets/home.jpg';
import { productsData } from '../../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div className="product-detail-page not-found">
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist.</p>
        <button onClick={() => navigate('/products')} className="back-button">
          Back to All Products
        </button>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-header">
        <button onClick={() => navigate(-1)} className="back-button">
          &larr; Back
        </button>
        <h1>{product.name}</h1>
      </div>
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.img} alt={product.name} onError={e => { e.target.src = homeImg; }} />
        </div>
        <div className="product-detail-info">
          <h2>Description</h2>
          <p>{product.description || 'No description available.'}</p>

          <h3>Key Features</h3>
          {product.features && product.features.length > 0 ? (
            <ul className="features-list">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          ) : <p>No features listed.</p>}

          <h3>Technical Specifications</h3>
          {product.specs && Object.keys(product.specs).length > 0 ? (
            <table className="specs-table">
              <tbody>
                {Object.entries(product.specs).map(([key, value]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : <p>No specifications available.</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;