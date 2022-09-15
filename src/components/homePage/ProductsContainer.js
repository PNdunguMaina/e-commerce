import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/products/productsSlice';
import ProductItem from './ProductItem';
import './ProductItem.css';

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="products-container container">
      {products.map((product) => (
        <ProductItem key={product.id} item={product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
