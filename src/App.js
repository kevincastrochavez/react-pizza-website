import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import { productData } from "./components/Products/data";
import Products from "./components/Products/Products";

import { GlobalStyles } from "./globalStyles.styles";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
    </Router>
  );
}

export default App;
