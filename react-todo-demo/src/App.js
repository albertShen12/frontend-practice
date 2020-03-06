import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AppRouteComponent } from "./routes";

function App() {
  return (
    <Provider store={store}>
      <AppRouteComponent />
    </Provider>
  );
}

export default App;
