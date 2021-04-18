import React from "react";
import { StyledHeader } from "../styles/HeaderStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Header = () => {
  
  return (
    <StyledHeader>
      <div className="main-wrapper">
        <div className="left-wrapper">
          <div className="logo">
            <NavLink to="/">
              <h1>MovieFlicks</h1>
            </NavLink>
          </div>
          <div className="routes">
            <NavLink exact to="/" activeClassName="line">
              <h3>Home</h3>
            </NavLink>
            <NavLink to="/movies" activeClassName="line">
              <h3>Movies</h3>
            </NavLink>
            <NavLink to="/tv" activeClassName="line">
              <h3>Series</h3>
            </NavLink>
          </div>
        </div>
        <div className="right-wrapper">
          <form>
            <input type="text" placeholder="Search Here" />
          </form>
          <div className="menu">
            <FontAwesomeIcon
              icon={faBars}
              color="white"
              size="2x"
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
