import React from "react";

import coCurr from "../../Components/images/co-curr.png"

import Footer from "../Footer/Footer";
import MainNavigation from "../../Components/Navigation2/MainNavigation";

import "./Cocurr.css"

const Cocurr=(props)=>{
        return(<div>
        <MainNavigation/>
        <div className="cocurr-main">
            <div className="cocurr-heading">
                <h2>CO-CURRICULAR ACTIVITIES</h2>
                <img className="icon" src={coCurr}/>
            </div>
            <hr/>
        </div>
        <Footer/>
        </div>)
}

export default Cocurr;