import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./Header";
import Footer from "./Footer";
import "@/styles/app.less";

const Layout = props => {
  const { route } = props;
  console.log("Layout route:", route);
  return (
    <div id="app-layout">
      <Header />
      <div id="app-container">
        <div className="width-wall">{renderRoutes(route.routes)}</div>
      </div>
      <Footer />
    </div>
  );
};

export { Layout as default };
