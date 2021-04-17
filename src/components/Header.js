import React from "react";
import { StyledHeader } from "../styles/HeaderStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <StyledHeader>
      <div className="main-wrapper">
        <div className="left-wrapper">
          <div className="logo">
            <Link to="/">
              <h1>MovieFlicks</h1>
            </Link>
          </div>
          <div className="routes">
            <Link to="/">
              <h3>Home</h3>
            </Link>
            <Link to="/movies">
              <h3>Movies</h3>
            </Link>
            <Link to="/tv">
              <h3>Series</h3>
            </Link>
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
