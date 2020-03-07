import React,{useEffect} from "react";
import { withRouter } from "react-router-dom";
import logo from "@/logo.svg";
import { Button } from "antd";

const Home = (props) => {
  console.log("Home props",props);
  const {user}=props;
  useEffect(()=>{
    console.log("props user update:",user);
  },[user])
  return (
    <div className="App">
      hello world
    </div>
  );
};

export default withRouter(Home);
