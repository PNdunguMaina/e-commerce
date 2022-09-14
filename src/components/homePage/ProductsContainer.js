import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/products/productsSlice';
import ProductItem from './ProductItem';

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} item={product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
