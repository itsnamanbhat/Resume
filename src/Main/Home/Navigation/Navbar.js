import React, { useState } from "react";

import Navlink from "./Navlink";
import SideDrawer from "./SideDrawer";
import Backdrop from "../../../Components/Backdrop";

import "./Navbar.css";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openDrawerHandler = () => {
    return setIsOpen(true);
  };
  const closeDrawerHandler = () => {
    return setIsOpen(false);
  };
  return (
    <div className="main-navigation">
      {isOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer onClick={closeDrawerHandler} show={isOpen}>
        <nav className="navbar__drawer-nav">
          <Navlink />
        </nav>
      </SideDrawer>
      <div className="mainHeader">
        <button className="drawerNav__btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <nav className="navbar__header-nav">
          <Navlink />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
