import { actionTypes } from "./actions";
import { commonReducer } from "../reduxUtil";
import { Map } from "immutable";
const initState = Map({
  targets: [
    { id: 1001, title: "学习redux", content: "" },
    { id: 1002, title: "学习egg.js", content: "" }
  ],
  achieves: [{ id: 2001, title: "学习react", content: "" }],
  todos: [
    { id: 2001, title: "学习react16生命周期", content: "", targetId: 2001 },
    { id: 2001, title: "学习react新特性hooks", content: "", targetId: 2001 }
  ],
  curTodo: undefined
});

export const todoReducer = (state = initState, action) => {
  console.log("todoReducer receive:", action.type, state);
  switch (action.type) {
    default:
      if (Object.values(actionTypes).indexOf(action.type) !== -1) {
        const { key, payload } = commonReducer(action, state, initState);
        return state.set(key, payload);
      } else {
        return state;
      }
  }
};
