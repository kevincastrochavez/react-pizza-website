import React from "react";

import { Bars, Nav, NavIcon, NavLink } from "./Navbar.styles";

function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>

        <NavIcon>
          <p>Menu</p>

          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
}

export default Navbar;
