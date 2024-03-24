import React from "react";

import MainNavigation from "../../Components/Navigation2/MainNavigation";
import Education from "./Education";
import Skills from "./Skills";

import info from "../../Components/images/info.png";
import quotes1 from "../../Components/images/close.png";
import quotes2 from "../../Components/images/open.png";


import "./About.css";
import Footer from "../Footer/Footer";

const About = (props) => {
  return (
    <div>
      <MainNavigation />
      <div className="about-main">
        <div className="about-heading">
          <h1>ABOUT ME</h1>
          <img id="info" src={info} />
        </div>
        <ul className="about-brief">
          <li>Disciplined</li>
          <li>Neophile</li>
          <li>Organized</li>
        </ul>
        <hr></hr>
        <div className="about-para">
          <h1>
            <img className="quotes" src={quotes2}/> An Enthusiastic and Passionate
            Web developer <img className="quotes" src={quotes1} />
          </h1>
          <p>Looking for any opportunity which helps to build my professional career</p>
        </div>
      </div>
      <Education/>
      <Skills />
      <Footer/>
    </div>
  );
};

export default About;
