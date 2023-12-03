import React from "react";
import ReactDOM from "react-dom/client";
// import "./styles/base.css";
import App from "components/App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/joy/CssBaseline";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { theme } from "styles/theme";
import { CssVarsProvider } from "@mui/joy/styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />

        <App />
      </CssVarsProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
