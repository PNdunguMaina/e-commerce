/* eslint-disable react/prop-types */
import React from 'react';

function ProductItem({ item }) {
  return (
    <div className="product-details">
      <div className="image-container">
        <img src={item.image} alt="" />
      </div>
      <div className="name-container">
        <span>Name:</span>
        <span>{item.name}</span>
      </div>
      <div className="category-container">
        <span>Category:</span>
        <span>{item.brand}</span>
      </div>
      <div className="price-container">
        <span>Price:</span>
        <span>
          {item.currency}
          {item.price}
        </span>
      </div>

      <div className="description-container">
        <span>Description:</span>
        <span>{item.description}</span>
      </div>
    </div>
  );
}

export default ProductItem;
