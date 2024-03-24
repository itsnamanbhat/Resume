import React from "react";
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";

import Home from "./Main/Home/Home";
import Cocurr from "./Main/Co-curricular/Cocurr";
import About from "./Main/About/About";
import Project from "./Main/Project/Projects";

const App=()=>{
  return(
    <React.Fragment>
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocurr" element={<Cocurr />} />
          <Route path="/project" element={<Project/>} />
        </Routes>
      </Router>
      </main>
    </React.Fragment>
  )
}

export default App;
