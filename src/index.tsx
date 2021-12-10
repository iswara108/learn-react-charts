import React from "react";
import ReactDOM from "react-dom";

import Bar from "./Bar";

export default function App() {
  return <Bar />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
