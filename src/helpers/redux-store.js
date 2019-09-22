import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import RootReducer from "./root-reducer";
import thunkMiddleware from "redux-thunk";

const loggerMiddleware = createLogger();
export const store = createStore(
  RootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
