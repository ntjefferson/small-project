import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from "./reducers"

const initialState = {};

const middleware = [thunk];

// Set up if statement to use Redux Chrome tool
// If tool not found, then nothing happens
const store = createStore(reducers, initialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
  ));

export { store };