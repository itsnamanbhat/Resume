import React, { useState } from "react";

import MainHeader from "./MainHeader";
import { Link} from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "../../Main/Home/Navigation/SideDrawer";
import Backdrop from "../Backdrop";

import "./MainNavigation.css";

const MainNavigation = (props) => {
    const [drawerIsOpen,setDrawerIsOpen]=useState(false);

    const openDrawerHandler=()=>{
      setDrawerIsOpen(true)
    }
    const closeDrawerHandler=()=>{
      setDrawerIsOpen(false);
    }

  return (
    <React.Fragment>
    {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
    <SideDrawer onClick={closeDrawerHandler} show={drawerIsOpen}>
      <nav className="main-navigation__drawer-nav">
        <NavLinks/>
      </nav>
    </SideDrawer>

    <MainHeader>
      <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">Naman Bhat</Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <NavLinks />
      </nav>
    </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
