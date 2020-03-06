import { actionTypes } from "./actions";
import { commonReducer } from "../reduxUtil";
import { Map } from "immutable";
const initState = Map({
  todos: [],
  curTodo: undefined,
});

export const todoReducer = (state = initState, action) => {
  console.log("todoReducer receive:",action.type,state)
  switch (action.type) {
    default:
      if (Object.values(actionTypes).indexOf(action.type)!==-1) {
        const {key,payload}=commonReducer(action,state,initState);
        return state.set(key,payload);
      }else{
        return state;
      }
  }
};
