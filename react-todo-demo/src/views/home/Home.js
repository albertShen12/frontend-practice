import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "antd";
import { doAction, appActTypes, todoActTypes } from "@/redux/actions";
import "@/styles/views-home.less";
import { targetStatusEnum } from "@/utils/constant";

const Home = props => {
  console.log("Home props", props);
  const { user } = props;
  const todos = useSelector(state => state.getIn(["todo", "todos"]));
  const targets = useSelector(state => state.getIn(["todo", "targets"]));
  // const achieves = useSelector(state => state.getIn(["todo", "achieves"]));
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("props user update:", user);
  }, [user]);
  const handleTargetAdd = () => {
    const action = doAction(todoActTypes.TARGETS_ADD)({
      id: 2005,
      title: "新增目标"
    });
    console.log("action", action);
    dispatch(action);
  };
  return (
    <div className="home-view">
      <div className="target-board">
        <Card
          title="目标"
          extra={
            <a href="#" onClick={handleTargetAdd}>
              更多
            </a>
          }
          style={{ width: "100%", marginBottom: 12 }}
        >
          {targets.map(item => {
            let StatusIcon;
            switch (item.status) {
              case targetStatusEnum.FINISH:
                StatusIcon=(<span className="status-icon status-finish">已完成</span>);
                break;
              case targetStatusEnum.INPROGRESS:
                StatusIcon=(<span className="status-icon status-inprogress">进行中</span>);
                break;
              default:
                StatusIcon=(<span className="status-icon status-unactive">未激活</span>);
            }
          return <p key={item.id}>{item.title}{StatusIcon}</p>;
          })}
        </Card>
      </div>
      <div className="todo-board">待办</div>
    </div>
  );
};

export default withRouter(Home);
