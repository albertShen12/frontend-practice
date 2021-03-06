import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Layout from "@/components/Layout";

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

// const Home = lazy(() => import("@/views/home"));
const Home = lazy(() => import("@/views/home/Home"));
const Login = lazy(() => import("@/views/login"));
const PageNotFound = lazy(() => import("@/views/pageNotFound"));

const appRoutes = [
  {
    path: "/",
    key: "index",
    exact: true,
    render: () => <Redirect to="/home/dashboard" />
  },
  {
    path: "/home",
    key: "home",
    component: Layout,
    routes: [
      { path: "/home/dashboard",key: "dashboard", render: SuspenseComponent(Home) }
    ]
  },
  { path: "/login", key: "login", render: SuspenseComponent(Login) },
  { path: "*", key: "404", render: SuspenseComponent(PageNotFound) }
];

const AppRouteComponent = () => {
  return (
    <Router>
      <Switch>{renderRoutes(appRoutes)}</Switch>
    </Router>
  );
};

export { appRoutes as default, AppRouteComponent };
