// defining state
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state
const initialCounterState = {
  count: 0,
};

const initialUserState = {
  users: [{ name: "Showkat Ali" }],
};

// action
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const addUsers = () => {
  return {
    type: ADD_USER,
    payload: { name: "Mohammad Ali" },
  };
};

// state
// dispatch action
// reducer
// store
