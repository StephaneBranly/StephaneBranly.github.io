import React, { useRef, useState } from "react";
import "./App.scss";

import OntoProvider from "ontology/OntoProvider";
import Navigation from "components/Navigation/Navigation";
import { Route, Routes } from "react-router";
import HumanView from "views/HumanView";
import TurtleView from "views/TurtleView";
import OntologyExplorerView from "views/OntologyExplorerView";

function App() {
  return (
    <div className="App">
      <OntoProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<HumanView />} />
          <Route path="/turtle" element={<TurtleView />} />
          <Route path="/explorer" element={<OntologyExplorerView />} />
        </Routes>
      </OntoProvider>
    </div>
  );
}

export default App;
