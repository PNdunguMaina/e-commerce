/* eslint-disable react/prop-types */
import React from 'react';

function ProductList({ item }) {
  return (
    <div>
      <div className="product-details">
        <div className="image-container">
          <img src={item.image} alt="" />
        </div>
        <div className="name-container">
          <span>Name:</span>
          <span>{item.name}</span>
        </div>
        <div className="price-container">
          <span>Price:</span>
          <span>
            {item.currency}
            {item.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
