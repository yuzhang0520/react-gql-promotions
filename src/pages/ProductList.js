import React from 'react';
import useProducts from '../hooks/useProducts.js';
import '../styles/List.css';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  const { loading, error, data } = useProducts();

  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log('Getting Products:', { error, loading, data});

  const handleRowClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="main-container">
      <h1 className="title">Product List</h1>
      <div className="products-table">
        <div className="products-header">
          <div className="header-item">ID</div>
          <div className="header-item">Name</div>
          <div className="header-item">Description</div>
        </div>
        <div className="table-content">
          {data.products.map(product => (
            <div 
              key={product.id} 
              className="product-row"
              onClick={() => handleRowClick(product.id)}
            >
              <div className="table-data">{product.id}</div>
              <div className="table-data">{product.name}</div>
              <div className="table-data">{product.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;