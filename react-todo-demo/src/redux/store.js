import { applyMiddleware, createStore } from "redux";
import {combineReducers} from "redux-immutable"
import thunk from "redux-thunk";
import {appReducer} from "./app/reducer";
import {todoReducer} from "./todo/reducer";

const rootReducer=combineReducers({
  app:appReducer,
  todo:todoReducer,
});


const store = createStore(rootReducer, applyMiddleware(thunk));

console.log("initState:",store.getState().toJS());

export default store;