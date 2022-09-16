import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productsSlice from './products/productsSlice';

const store = configureStore({
  reducer: productsSlice,
  middleware: [thunk],
});

export default store;
