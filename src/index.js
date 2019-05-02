import React from "react";
import ReactDOM from "react-dom";
import Docs from "./docs/Docs";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "../node_modules/highlight.js/styles/ocean.css";
import styled, { ThemeProvider } from "styled-components";
//import theme from "../src/utils/styles";
const theme = {
  color: {
    mainWhite: `#ffffff`,
    mainBlack: `#262626`,
    mainYellow: `#d2aa5c`,
    mainYellow2: `#F2AF29`,
    mainGrey: `#474747`,
    primary: `#a1cdf1`,
    primaryDark: `#94b9d8`,
    secondary: `#F7A072`,
    secondaryDark: `#e9986d`
  }
};
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Docs />
  </ThemeProvider>,

  document.getElementById("root")
);
registerServiceWorker();
