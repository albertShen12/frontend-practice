import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import logo from "@/logo.svg";
import { Button,Card } from "antd";
import "@/styles/views-home.less";

const Home = props => {
  console.log("Home props", props);
  const { user } = props;
  useEffect(() => {
    console.log("props user update:", user);
  }, [user]);
  return (
    <div className="home-view">
      <div className="target-board">
        <Card
          title="目标"
          extra={<a href="#">更多</a>}
          style={{ width: "100%",marginBottom:12 }}
        >
          {props.targets.map(item=>(<p key={item.id}>{item.title}</p>))}
        </Card>
        <Card
          title="成就"
          extra={<a href="#">更多</a>}
          style={{ width: "100%" }}
        >
          {props.achieves.map(item=>(<p key={item.id}>{item.title}</p>))}
        </Card>
      </div>
      <div className="todo-board">待办</div>
    </div>
  );
};

export default withRouter(Home);
