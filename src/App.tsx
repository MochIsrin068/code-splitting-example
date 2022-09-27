import React from "react";
import "./styles/App.css";

import DynamicImport from "./examples/dynamic-import";
import Lazy from "./examples/lazy";
import SuspenseExample from "./examples/suspense";
import LoadableComponent from "./examples/loadable-component";
import ReactRouter from "./examples/react-router";
import ErrorBoundary from "./examples/error-bundaries";

function App() {
  return (
    <div className="App" style={{ padding: "10px 60px" }}>
      <h2 style={{ borderBottom: "1px solid", paddingBottom: 10 }}>
        Code Splitting Examples :
      </h2>
      <div>
        {/* Dynamic Import */}
        <DynamicImport />

        {/* Lazy */}
        {/* <Lazy /> */}

        {/* Suspense */}
        {/* <SuspenseExample /> */}

        {/* React Router */}
        {/* <ReactRouter /> */}

        {/* Loadable Components */}
        {/* <LoadableComponent /> */}

        {/* Error Boudaries */}
        {/* <ErrorBoundary /> */}
      </div>
    </div>
  );
}

export default App;
