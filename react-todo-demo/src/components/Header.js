import React, { useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";

const Header = props => {
  return (
    <header id="app-header">
      <div className="logo">TodoDemo</div>
      <div className="head-nav">
        <span className="nav-item active">待办</span>
        <span className="nav-item">日志</span>
      </div>
      <div className="head-user">
        <div className="avator">游客</div>
      </div>
    </header>
  );
};

export { Header as default };
