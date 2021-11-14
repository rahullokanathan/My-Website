import React from 'react';
import {Link} from "react-scroll";
import "./TopContent.css";

const TopContent = () => {
    return (
        <div className="topContent">
            <div className="topContent__container">
       <h1> HI! I am Rahul Lokanathan</h1>
       <p> Full Stack Web developer looking out for opportunities in MERN stack and software development</p>         
          <a href="https://drive.google.com/file/d/1Eoug3PTN8-3re60t4qxR6f84dEsKJJTt/view?usp=sharing"
            target="_blank"  rel="noreferrer">
              <button className="topContent__downloadbutton"> Download CV</button></a>  
            <Link to="projects" smooth={true} duration={500}> </Link>


            <a className="topContent__workbutton" href="https://eversunshinelife.com/Self-Improvement/23-essential-life-skills-everyone-should-learn/" target="_blank" rel="noreferrer" >My Blog</a>
             
            
            
            </div>


        </div>

    );
};

export default TopContent
