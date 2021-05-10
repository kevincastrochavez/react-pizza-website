import React from "react";

import { Bars, Nav, NavIcon, NavLink } from "./Navbar.styles";

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>

        <NavIcon onClick={toggle}>
          <p>Menu</p>

          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
}

export default Navbar;
