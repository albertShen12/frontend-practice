import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";
import "@/styles/app.less";

const Layout = props => {
  const { route } = props;
  console.log("Layout route:", route);
  return (
    <div id="app-layout">
      <Header />
      <div id="app-content">
        <Aside />
        <section>{renderRoutes(route.routes)}</section>
      </div>
    </div>
  );
};

export { Layout as default };
