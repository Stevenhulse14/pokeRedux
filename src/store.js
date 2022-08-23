import pokemonReducer from "./reducer/pokemonReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// const reducer = combineReducers({
//   pokemon: pokemonReducer,
// });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(pokemonReducer, middleware);
export default store;
