// state
// action
// reducer
// store

const { createStore } = require("redux");

// CONSTANT
const INCREMENT = "INCREMENT";

// state - defining state
const counterState = {
  count: 0,
};

// action -type, payload
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

// reducter -state, action
const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };

    default:
      state;
  }
};

// store - getState(), dispatch(), subscribe()
const store = createStore(counterReducer);

// subscribe()
store.subscribe(() => {
  console.log(store.getState());
});
// dispatch()
store.dispatch(incrementCounter());
