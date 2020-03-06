import { actionTypes } from "./actions";
import { commonReducer } from "../reduxUtil";
import { Map } from "immutable";
const initState = Map({
  user: undefined,
  fetching: false
});

export const appReducer = (state = initState, action) => {
  console.log("appReducer receive:",action.type,state)
  switch (action.type) {
    case actionTypes.FETCHING_SUSPEND:
      return state.set("fetching", "suspend");
    case actionTypes.FETCHING_TRUE:
      return state.set("fetching", "true");
    case  actionTypes.FETCHING_FALSE:   
      return state.set("fetching", "false");
    default:
      if (Object.values(actionTypes).indexOf(action.type)!==-1) {
        const {key,payload}=commonReducer(action,state,initState);
        return state.set(key,payload);
      }else{
        return state;
      }
  }
};
