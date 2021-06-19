import React from "react";
import { NavbarItem, NavbarH3, Overlay } from "../navbar-styles";

const NavItems = ({ scrollNav }) => {
  return (
    <>
      <NavbarItem scrollNav={scrollNav} mgL={true} pL="20px" pR="20px">
        <NavbarH3 size="1.2" weight="400">
          TV Shows
        </NavbarH3>
        <Overlay className="nav-item-overlay" />
      </NavbarItem>
      <NavbarItem scrollNav={scrollNav} pL="20px" pR="20px">
        <Overlay className="nav-item-overlay" />
        <NavbarH3 size="1.2" weight="400">
          Movies
        </NavbarH3>
      </NavbarItem>
      <NavbarItem scrollNav={scrollNav} pL="20px" pR="20px">
        <Overlay className="nav-item-overlay" />
        <NavbarH3 size="1.2" weight="400">
          Kids
        </NavbarH3>
      </NavbarItem>
      <NavbarItem scrollNav={scrollNav} pL="20px" pR="20px">
        <Overlay className="nav-item-overlay" />
        <NavbarH3 size="1.2" weight="400">
          More
        </NavbarH3>
      </NavbarItem>
      <NavbarItem scrollNav={scrollNav} pL="20px" pR="20px">
        <Overlay className="nav-item-overlay" />
        <svg
          className="search"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M23.832 19.641l-6.821-6.821c2.834-5.878-1.45-12.82-8.065-12.82-4.932 0-8.946 4.014-8.946 8.947 0 6.508 6.739 10.798 12.601 8.166l6.879 6.879c1.957.164 4.52-2.326 4.352-4.351zm-14.886-4.721c-3.293 0-5.973-2.68-5.973-5.973s2.68-5.973 5.973-5.973c3.294 0 5.974 2.68 5.974 5.973s-2.68 5.973-5.974 5.973z" />
        </svg>
      </NavbarItem>
    </>
  );
};

export default NavItems;
