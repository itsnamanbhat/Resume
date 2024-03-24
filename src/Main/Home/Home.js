import React from "react";
import Navbar from "./Navigation/Navbar";
import "./Home.css"

const Home=(props)=>{
    return(<div className="main-container">
            <Navbar />
        <div className="main-part">
        <div className="left-container">
        <p id="name">Naman Bhat</p>
        <p id="intro">Hello!</p>
        </div>
        </div>
    </div>);
}

export default Home;