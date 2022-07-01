import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import "./styles.css";
import { YourDestinyApp } from "./YourDestinyApp";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <YourDestinyApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
