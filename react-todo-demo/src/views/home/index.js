import Home from "./Home";
import { connect } from "react-redux";
import {doAction,appActTypes,todoActTypes} from "@/redux/actions";

const mapStateToProps = state => ({
  user: state.getIn(["app", "user"]),
  todos: state.getIn(["todo", "todos"]),
});

const mapDispatchToProps = dispatch => ({
    setUser(payload){
        dispatch(doAction(appActTypes.USER_SET)(payload))
    },
    resetUser(payload){
        dispatch(doAction(appActTypes.USER_RESET)(payload))
    },
    addTodos:doAction(todoActTypes.TODOS_ADD),
    removeTodos:doAction(todoActTypes.TODOS_REMOVE),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
