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
    <div style={{ backgroundColor: '#d0f89b', minHeight: '100vh' }}>
      <Link to="/">
        <div className="p-3 fs-1 p-fixed ">
          <FontAwesomeIcon icon={faCircleArrowLeft} />
        </div>
      </Link>

      <div className="striped">
        <div className="d-flex justify-content-center mb-5">
          <img src={product[0].image} alt="" />
        </div>
        <div className="d-flex justify-content-center mb-3 fs-1 text-danger">
          <span>
            {product[0].currency}
            {product[0].price}
          </span>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <h1>{product[0].name}</h1>
        </div>
        <div className="d-flex justify-content-center mb-3 opacity-50">
          <h3>{product[0].type}</h3>
        </div>
        <div className="d-flex justify-content-center mb-3 text-danger">
          <h4>{product[0].brand.toUpperCase()}</h4>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-3 px-4 fw-bold">
          <span className="opacity-75">{product[0].description}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
