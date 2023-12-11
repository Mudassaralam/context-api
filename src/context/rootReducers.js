import { postReducer, initialState as postState } from './posts/reducer';

// Add Multiple States of  Initial States
const initialState = {
  // counterState,
  postState,
};

// Add Multiple Reducers
const combineReducers = (reducers) => (state, action) =>
  Object.keys(reducers).reduce(
    (nextState, key) => ({
      ...nextState,
      [key]: reducers[key](nextState[key], action),
    }),
    state
  );

const rootReducers = combineReducers({
  // counterState: counterReducer,
  postState: postReducer,
});

export { initialState, rootReducers };
