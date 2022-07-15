import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import "./styles.css";
import { YourDestinyApp } from "./YourDestinyApp";
import { store } from "./store";
import { PlaceProvider } from "./context/placeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <PlaceProvider>
<Provider store={ store }>

      <BrowserRouter>
        <YourDestinyApp />
      </BrowserRouter>
    </Provider>
    </PlaceProvider>
  </React.StrictMode>
);
