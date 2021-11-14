import { IconButton } from '@material-ui/core';
import React from 'react';
import {LinkedIn, GitHub} from "@material-ui/icons";
import {Element} from "react-scroll";
import "./Contact.css";

const Contact = () => {
    return (
        <Element className="contact"
        id="contact" >
            <h1>Contact</h1>
            <div className="contact__container">
                <p>
                    Email: <span> rahul15.loka@gmail.com</span>
                </p>
                <p>
                    Github Username: <span>@rahullokanathan</span>
                </p>
                <div className="contact__icons">  
                <a href="https://www.linkedin.com/in/rahul-lokanathan-27a308126/"target="_blank"  rel="noreferrer">
                    <IconButton>
                 <LinkedIn/>
                    </IconButton>
                </a>
                <a href="https://github.com/rahullokanathan"target="_blank"  rel="noreferrer">
                    <IconButton>
                 <GitHub/>
                    </IconButton>
                </a>
                

                </div>
            </div>

        </Element>
    )
}

export default Contact
