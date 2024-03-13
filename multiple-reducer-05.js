// state
// action
// reducer
// store

const { createStore, combineReducers } = require("redux");

// CONSTANT
const ADD_PRODUCTS = "ADD_PRODUCTS";
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_CART_ITEM = "ADD_CART_ITEM";
const GET_CART_ITEM = "GET_CART_ITEM";

// state - defining state
const initialProductState = {
  count: 1,
  products: ["Sugar"],
};
const initialCartState = {
  count: 1,
  cart: ["pen"],
};
// action -type, payload
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const getCartItems = () => {
  return {
    type: GET_CART_ITEM,
  };
};
const addProducts = (products) => {
  return {
    type: ADD_PRODUCTS,
    payload: products,
  };
};
const addCarts = (cart) => {
  return {
    type: ADD_CART_ITEM,
    payload: cart,
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
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEM:
      return {
        ...state,
      };

    case ADD_CART_ITEM:
      return {
        count: state.count + 1,
        carts: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

//multiple reducer
const rootReducer = combineReducers({
  productsReducer: productsReducer,
  cartReducer: cartReducer,
});
// store - getState(), dispatch(), subscribe()
// const store = createStore(cartReducer);
const store = createStore(rootReducer);


// subscribe()
store.subscribe(() => {
  console.log(store.getState());
});
// dispatch()
store.dispatch(getProducts());
store.dispatch(addProducts("Apple"));
store.dispatch(getCartItems());
store.dispatch(addCarts("Khata"));
