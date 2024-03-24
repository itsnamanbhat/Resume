import React from "react";

import email from "../../Components/images/email.png";
import phone from "../../Components/images/telephone.png"
import instagram from "../../Components/images/instagram.png";
import github from "../../Components/images/github.png"
import linkedin from "../../Components/images/linkedin.png";

import "./Footer.css"

const Footer=(props)=>{
    return(<div className="footer-main">
        <div className="footer-links">
            <p><img className="fIcon" src={email}/>namanbhat002@gmail.com</p>
            <p><img className="fIcon" src={github}/>https://github.com/itsnamanbhat</p>
            <p><img className="fIcon" src={phone}/>+91 9148551359</p>
            <p><img className="fIcon" src={instagram}/>_namanbhat_</p>
            <p><img className="fIcon" src={linkedin}/>https://www.linkedin.com/in/naman-bhat-b39791222/</p>
        </div>
    </div>)
}

export  default Footer;