import React from "react";
import ReactDOM from "react-dom";

import Rout from "./routers";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Rout />
  </React.StrictMode>,
  rootElement
);
