import React from "react";
import { NavbarLogoContainer, NavbarLogo } from "../navbar-styles";
import logo from "../logo.png";

const NavLogo = ({ scrollNav }) => {
  return (
    <NavbarLogoContainer scrollNav={scrollNav} mgL={true}>
      <NavbarLogo src={logo} width="120" height="35" />
    </NavbarLogoContainer>
  );
};

export default NavLogo;
