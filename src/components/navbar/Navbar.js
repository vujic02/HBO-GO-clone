import React, { useState, useEffect } from "react";
import {
  NavbarContainer,
  NavbarItemContainer,
  NavbarItems,
} from "./navbar-styles";

import {
  NavItems,
  NavLogo,
  NavSingup,
  NavMenuIcon,
} from "./navbar-components/index";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 20) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <NavbarContainer scrollNav={scrollNav}>
      <NavbarItemContainer scrollNav={scrollNav}>
        <NavbarItems FlexAlign="flex-start">
          <NavLogo scrollNav={scrollNav} />
          <NavItems scrollNav={scrollNav} />
        </NavbarItems>
        <NavbarItems FlexAlign="flex-end">
          <NavSingup />
        </NavbarItems>
        <NavMenuIcon toggle={toggle} />
      </NavbarItemContainer>
    </NavbarContainer>
  );
};

export default Navbar;
