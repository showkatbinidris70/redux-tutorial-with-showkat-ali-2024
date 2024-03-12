// state
// action
// reducer
// store

const { createStore } = require("redux");
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const counterState = {
  count: 0,
};
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter());
