/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function ProductItem({ item }) {
  return (
    <div className="product-item">
      <Link to={`/${item.id}`} state={item.id}>
        <div className="back-arrow-icon">
          <FontAwesomeIcon icon={faCircleArrowRight} />
        </div>
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
      </Link>
    </div>
  );
}

export default ProductItem;
