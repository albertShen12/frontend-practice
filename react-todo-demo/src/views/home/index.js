import Home from "./Home";
import { connect } from "react-redux";
import {doAction,appActTypes,todoActTypes} from "@/redux/actions";

const mapStateToProps = state => ({
  user: state.getIn(["app", "user"]),
  todos: state.getIn(["todo", "todos"]),
});

const mapDispatchToProps = ({
    setUser:doAction(appActTypes.USER_SET),
    resetUser:doAction(appActTypes.USER_RESET)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
