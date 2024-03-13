// state
// action
// reducer
// store

const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// CONSTANT
const ADD_PRODUCTS = "ADD_PRODUCTS";
const GET_PRODUCTS = "GET_PRODUCTS";

// state - defining state
const initialProductState = {
  count: 1,
  products: ["Sugar"],
};
// action -type, payload
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProducts = (products) => {
  return {
    type: ADD_PRODUCTS,
    payload: products,
  };
};

// reducter -state, action
const productsReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCTS:
      return {
        count: state.count + 1,
        products: [...state.products, action.payload],
      };

    default:
      return state;
  }
};

// store - getState(), dispatch(), subscribe()
const store = createStore(productsReducer, applyMiddleware(logger));

// subscribe()
store.subscribe(() => {
  console.log(store.getState());
});
// dispatch()
store.dispatch(getProducts());
store.dispatch(addProducts("Apple"));
