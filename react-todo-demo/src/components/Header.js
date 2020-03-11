import React, { useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";

const Header = props => {
  return (
    <header id="app-header">
      <div className="width-wall">
        <div className="float-left logo">待办</div>
        <div className="float-right">
          <span className="pointer pr-m border-right-white">
            <UserOutlined />
            登录
          </span>
          <span className="pointer  ml-m">注册</span>
        </div>
      </div>
    </header>
  );
};

export { Header as default };
