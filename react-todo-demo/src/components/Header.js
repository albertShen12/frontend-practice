import React, { useEffect } from "react";

const Header = props => {
  return (
    <header id="app-header">
      <div className="width-wall">
        <div className="float-left logo">千叶日历</div>
        <div className="float-right">登录 | 注册</div>
      </div>
    </header>
  );
};

export { Header as default };
