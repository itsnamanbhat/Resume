import React, { useState } from "react";
import Modal from "../../Components/Modal";


import Button from "../../Components/Button";
import "./ProjectTab.css"

const ProjectTab=(props)=>{
const [showModal,handleShowModal]=useState(false);

const openModal=()=>handleShowModal(true);
const closeModal=()=>handleShowModal(false);

    return(
    <React.Fragment>
    { showModal &&
        <Modal
          show={showModal}
          header={props.title}
          onCancel={closeModal}
          footer={<Button onClick={closeModal}>Close</Button>}
        >
          <div className="image_container"></div>
        </Modal>
      }
    <div className="main-tab">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button onClick={openModal}>Know More</button>
    </div>
    </React.Fragment>)
}

export default ProjectTab;