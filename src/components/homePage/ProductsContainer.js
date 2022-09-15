import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/products/productsSlice';
import ProductItem from './ProductItem';
import './ProductItem.css';

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const searched = useSelector((state) => state.searched);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [products.length, dispatch]);
  return (
    <div>
      {searched.length === 0 && (
        <div className="products-container container">
          {products.map((product) => (
            <ProductItem key={product.id} item={product} />
          ))}
        </div>
      )}

      {searched && (
        <div className="products-container container">
          {searched.map((product) => (
            <ProductItem key={product.id} item={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsContainer;
