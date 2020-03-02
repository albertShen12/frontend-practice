import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "antd";

const Login = props => {
  let handleGoHome = () => {
    props.history.push("/home");
  };

  return (
    <div>
      login
      <p>
        <Button type="primary" onClick={handleGoHome}>前面home页</Button>
      </p>
    </div>
  );
};

export default withRouter(Login);
