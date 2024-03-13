// state
// action
// reducer
// store

const { createStore } = require("redux");

// CONSTANT
const ADD_USERS_BY_VALUE = "ADD_USERS_BY_VALUE";

// state - defining state
const users = {
  count: 1,
  users: ["Showkat"],
};

// action -type, payload
const addUsers = (user) => {
  return {
    type: ADD_USERS_BY_VALUE,
    payload: user,
  };
};

// reducter -state, action
const usersReducer = (state = users, action) => {
  switch (action.type) {
    case ADD_USERS_BY_VALUE:
      return {
        count: state.count + 1,
        users: [...state.users, action.payload],
      };

    default:
      state;
  }
};

// store - getState(), dispatch(), subscribe()
const store = createStore(usersReducer);

// subscribe()
store.subscribe(() => {
  console.log(store.getState());
});
// dispatch()
store.dispatch(addUsers("Ali"));
store.dispatch(addUsers("momo"));
