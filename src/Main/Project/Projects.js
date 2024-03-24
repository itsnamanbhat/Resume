import React from "react";

import projectIcon from "../../Components/images/project.png"
import "./Project.css"
import Footer from "../Footer/Footer";
import MainNavigation from "../../Components/Navigation2/MainNavigation";
import ProjectTab from "./ProjectTab";


const Projects=[{
    id:1, 
    title:"Frontend Website",
    languages:"React.Js",
    description:"A frontend design for a charity called Hongirana with association of IISC Bengaluru"
},{
    id:2, 
    title:"Api Project",
    languages:"Node.JS and Express.JS with REST Api",
    description:"A demonstration of the API methods"
}
]
const Project=(props)=>{
    return(<div>
    <MainNavigation/>
    <div className="project-main">
        <div className="project-heading">
            <h2>PROJECTS</h2>
            <img className="icon" src={projectIcon}/>
        </div>
        <hr/>
        <div className="project-drawer">
        <ProjectTab title={Projects[0].title} description={Projects[0].description} />
        <ProjectTab title={Projects[1].title} description={Projects[1].description} />
        <ProjectTab title={Projects[1].title} description={Projects[1].description} />
        <ProjectTab title={Projects[1].title} description={Projects[1].description} />
        </div>
    </div>
    <Footer/>
    </div>)
}

export default Project;