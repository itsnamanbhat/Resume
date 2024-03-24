import React from "react";

import skillIcon from "../../Components/images/skills.png";
import "./Skills.css";

const Skills = (props) => {
  return (
    <div className="skills-main">
      <div className="skills-header">
        <h1>
          SKILLS <img src={skillIcon} />
        </h1>
        </div>
        <hr/>
        <div className="skills-content">
          <div className="mainSkills skill-container">
            <h2>Where My Intrests Lies?</h2>
            <ul>
              <li>Java</li>
              <li>React.JS</li>
              <li>JavaScript</li>
              <li>Node.JS</li>
            </ul>
          </div>
          <div className="sideSkills skill-container">
            <h2>What Else I Know?</h2>
            <ul>
              <li>C++ and C</li>
              <li>mySQL</li>
              <li>MongoDB</li>
              <li>Rest Api</li>
            </ul>
          </div>
          <div className="otherSkills skill-container">
            <h2>Others</h2>
            <ul>
              <li>Javascript libraries</li>
              <li>MS Office </li>
              <li> Efficient Communication in English</li>
            </ul>
          </div>
        </div>
      
    </div>
  );
};

export default Skills;
