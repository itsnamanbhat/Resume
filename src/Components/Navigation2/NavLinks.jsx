import React from "react";

import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/project">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/cocurr">Co-Curriculars</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
