import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const App = () => (
  <div className="container">
    <h1> Container -   Host  </h1>
    <div className="host">
      <div className="mfItem">
        Loading Products...
      </div>
      <div className="mfItem">
        Loading Cart...
      </div>
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
