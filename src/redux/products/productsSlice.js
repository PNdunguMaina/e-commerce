/* eslint-disable no-case-declarations */
// Actions
const ADD_PRODUCTS = 'e-commerce/src/redux/products/ADD_PRODUCTS';
const SEARCH_PRODUCTS = 'e-commerce/src/redux/products/SEARCH_PRODUCTS';

// initialize state
const initialState = {
  products: [],
  searched: [],
};

// reducer
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...payload],
      };
    case SEARCH_PRODUCTS:
      // eslint-disable-next-line max-len
      const searchedProducts = state.products.filter((item) => item.name.toLowerCase().includes(payload.toLowerCase()));
      return {
        ...state,
        searched: payload === '' ? [] : searchedProducts,
      };
    default:
      return state;
  }
};

// Action creators
export const addProducts = (products) => ({
  type: ADD_PRODUCTS,
  payload: products,
});

export const searchProducts = (item) => ({
  type: SEARCH_PRODUCTS,
  payload: item,
});

export const fetchProducts = () => async (dispatch) => {
  const response = await fetch(
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx',
  );
  const data = await response.json();
  const product = data.map((item) => ({
    id: item.id,
    brand: item.brand,
    name: item.name,
    price: item.price,
    currency: item.price_sign,
    image: item.image_link,
    description: item.description,
    type: item.product_type,
  }));
  dispatch(addProducts(product));
};
