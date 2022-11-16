import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav
        style={{
          backgroundImage: `url('../../../img/jo.png)`,
        }}
      >
        <NavLink to="/">
          <img
            src={require("../../img/logo2.png")}
            alt="logo"
            style={{
              height: "100px",
            }}
          />
          <img
            src={require("../../img/logo.png")}
            alt="logo"
            style={{
              height: "80px",
            }}
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/contact-us" activeStyle>
            Circuit touristique
          </NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
