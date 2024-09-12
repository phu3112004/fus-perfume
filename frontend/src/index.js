import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./component/GlobalStyles/GlobalStyles";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers/index";

const store = createStore(allReducers);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyles>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </GlobalStyles>
  </BrowserRouter>
);
reportWebVitals();
