import React from "react";
import { NavLink } from "react-router-dom";

import "./Navlink.css";

const Navlink = (props) => {
  return (
    <ul className="Navlinks">
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

export default Navlink;
