import React from "react";
import ReactDOM from "react-dom";
import Docs from "./docs/Docs";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "../node_modules/highlight.js/styles/ocean.css";
import styled, { ThemeProvider } from "styled-components";
//import theme from "../src/utils/styles";
const theme = {
  primary: `#a1cdf1`,
  secondary: `#F7A072`
};
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Docs />
  </ThemeProvider>,

  document.getElementById("root")
);
registerServiceWorker();
