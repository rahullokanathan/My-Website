import React, { useState } from "react";
import "./Project.css";

function Project({ img, title, desc, link,gitUrl }) {
  const [show, setShow] = useState(false);
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">

      <div
        className="project"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show ? (
          <div className="project__content">
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ) : (
          <img src={img} alt=""/>
          
        )}
        
        
      </div>
      <button> <a href ={gitUrl} target="_blank" rel="noreferrer">Github Code Link</a></button>
    </a>
    

  );
}

export default Project;
