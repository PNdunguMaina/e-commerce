import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ProductDetails() {
  const { pathname } = useLocation();
  const products = useSelector((state) => state.products);
  const product = products.filter((item) => `/${item.id}` === pathname);

  return (
    <>
      <Link to="/">
        <div className="back-arrow-icon">
          <FontAwesomeIcon icon={faCircleArrowLeft} />
        </div>
      </Link>
      <div className="product-details">
        <div className="image-container">
          <img src={product[0].image} alt="" />
        </div>
        <div className="name-container">
          <span>Name:</span>
          <span>{product[0].name}</span>
        </div>
        <div className="type-container">
          <span>Type:</span>
          <span>{product[0].type}</span>
        </div>
        <div className="brand-container">
          <span>Brand:</span>
          <span>{product[0].brand}</span>
        </div>
        <div className="description-container">
          <span>Description:</span>
          <span>{product[0].description}</span>
        </div>
        <div className="price-container">
          <span>Price:</span>
          <span>
            {product[0].currency}
            {product[0].price}
          </span>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
