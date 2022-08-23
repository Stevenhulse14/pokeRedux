import pokemonReducer from "./reducer/pokemonReducer";
import teamReducer from "./reducer/teamReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//reducer and combineReducer
const reducer = combineReducers({
  pokemon: pokemonReducer,
  team: teamReducer,
});
// this is just some middleware and logger functionality
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
//create store
const store = createStore(reducer, middleware);
export default store;
