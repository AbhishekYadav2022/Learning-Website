import React from "react";
import "./App.css";
import { Home } from "./components/Home/Home";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Home />
    </div>
  );
}

export default App;
