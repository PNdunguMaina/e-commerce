/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import './ProductItem.css';

function ProductItem({ item }) {
  return (
    <div className="product-container">
      <Link
        to={`/${item.id}`}
        state={item.id}
        style={{ textDecoration: 'none' }}
      >
        <div className="back-arrow-icon">
          <FontAwesomeIcon icon={faCircleArrowRight} className="back-arrow" />
        </div>
        <div className="photo-price-container d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center mb-3">
            <img src={item.image} alt="" />
          </div>
          <div className="price-container d-flex justify-content-center mb-3 fs-1 text-danger px-3 bg-dark">
            <span className="text-white">
              {item.currency}
              {item.price}
            </span>
          </div>
        </div>

        <div className="product-details ">
          <div className="d-flex justify-content-center align-items-center p-2 mb-3 text-dark">
            <h3 className="text-decoration-none">{item.name}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
