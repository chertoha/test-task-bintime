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

reportWebVitals();
