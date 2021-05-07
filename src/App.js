import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero";

import { GlobalStyles } from "./globalStyles.styles";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
    </Router>
  );
}

export default App;
