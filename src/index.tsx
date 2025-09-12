import React from "react";
import ReactDOM from "react-dom/client";

// import "./index.css";
// import "./global.scss";

import { Sprite, SpriteSVG } from "@snack-uikit/icons";
import { App } from "#app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Sprite content={SpriteSVG} />
    <App />
  </React.StrictMode>
);
