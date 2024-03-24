import React from "react";

import edu from "../../Components/images/graduation-cap.png";

import "./Education.css";

const Education = (props) => {
  return (
    <div className="ed-main">
      <div className="ed-header">
        <h1>
          EDUCATION <img src={edu} />
        </h1>
      </div>
      <hr />
      <div className="education-container">
      <div className="ed-degree ed-common">
        <h2>B.E</h2>
        <p>
          Electronics and Instrumentation @ Ramaiah Institute of Technology,
          Bengaluru
        </p>
        <p><span>cgpa</span> : 7.5</p>
      </div>
      <div className="ed-puc ed-common">
        <h2>Pre-University</h2>
        <p>PCMC @ Sri Chaitanya PU college, Mangaluru</p>
        <p><span>Percentage</span> : 92.8</p>
      </div>
      <div className="ed-school ed-common">
        <h2>SSLC</h2>
        <p>Sri Venkateshwara Vidhya Mandira, Koppa</p>
        <p><span>Percentage</span> : 95.6</p>
      </div>
      </div>
    </div>
  );
};

export default Education;
