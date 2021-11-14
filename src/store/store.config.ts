import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger' 
import { rootReducer } from "./reducers/index";

const logger = createLogger({
  diff: true,
  collapsed: true
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))