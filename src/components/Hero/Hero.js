import React from "react";

import Navbar from "../Navbar/Navbar";

import {
  HeroBtn,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
} from "./Hero.styles";

function Hero() {
  return (
    <HeroContainer>
      <Navbar />

      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>

          <HeroP>Ready in 60 seconds</HeroP>

          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
