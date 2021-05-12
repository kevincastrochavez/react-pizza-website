import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import { productData, productDataTwo } from "./components/Products/data";
import Products from "./components/Products/Products";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";

import { GlobalStyles } from "./globalStyles.styles";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Products heading="Choose your Favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treatsfor You" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
