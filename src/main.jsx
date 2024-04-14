import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// router related component
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

// redux store related components
import { Provider } from "react-redux";
import { store } from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
