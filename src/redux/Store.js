import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";

import thunk from "redux-thunk";

import { UserReducer } from "./User.reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = combineReducers({ UserReducer });

const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

export { store };
