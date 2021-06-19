import React from "react";
import { NavbarSignup, NavbarBtn } from "../navbar-styles";

const NavSingup = () => {
  return (
    <>
      <NavbarSignup>
        <NavbarBtn
          size="1rem"
          weight="400"
          BtnBg="#059"
          BtnBgHover="#0091ea"
          BtnColor="#fff"
          BtnBorder="1px solid #059"
          BtnBorderRadius="5px"
          BtnBorderHover="1px solid #0091ea"
        >
          Register
        </NavbarBtn>
      </NavbarSignup>
      <NavbarSignup>
        <NavbarBtn
          size="1rem"
          weight="400"
          BtnBg="transparent"
          BtnBgHover="transparent"
          BtnColor="#fff"
          BtnBorder="1px solid #fff"
          BtnBorderRadius="5px"
          BtnBorderHover="1px solid #0091ea"
        >
          Login
        </NavbarBtn>
      </NavbarSignup>
    </>
  );
};

export default NavSingup;
