import React from 'react'
import { Element } from 'react-scroll';
import "./ProjectContainer.css";
import Project from '../../Project/Project';


function ProjectContainer() {
    const projects = [{ 
        img: "https://analyticsindiamag.com/wp-content/uploads/2020/09/e-com-tech-stack.jpg",
        title: "E-Commerce App",
        desc: "Created simple ecommerce website using reactjs and react-use-cart plugin.",
        link: "https://ecommerce-react-app.vercel.app/",
        gitUrl:"https://github.com/rahullokanathan/E-Commerce-App",
    },
    {
        img: "https://i.pcmag.com/imagery/articles/05DEKK8MiwN7Q0YcCqEaJVb-2..1569492447.jpg",
        title: "Fitness Logger",
        desc: "The fitness tracker allows the user to create a workout where they enter various exercises associated to the workout. The data can then be analyzed with an included stats page that provides insights into the details of all their workouts. ",
        link: "https://arcane-hollows-87215.herokuapp.com/",
        gitUrl:"https://github.com/rahullokanathan/Fitness-Logger",
    },
    {
        img: "https://res.cloudinary.com/practicaldev/image/fetch/s--gRQn230T--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/yp8wc2eur6ewzoy7xslt.png",
        title: "Chat Application",
        desc: "A Real Time Chat Application using React JS ",
        link: "https://stoic-jang-319b51.netlify.app/",
        gitUrl:"https://github.com/rahullokanathan/Chat-Application-",
    },
    
    {
        img:"https://cdn-media-1.freecodecamp.org/images/h3vEAG1S3y1zOfdLoqDiBEUtXhGTjbs8oBpj",
        title: "Pizza Delivery App",
        desc:"A simple front-end pizza store built using React,I did this project to get more comfortable with React,Node js,MongoDB",
        link:  "https://piza-delivery-shop.herokuapp.com/",
        gitUrl:"https://github.com/rahullokanathan/Pizza-Delivery-App",

    },
    {
        img:"https://i.ytimg.com/vi/BiaIh1PeBwo/maxresdefault.jpg",
        title: "Student-Mentor Database",
        desc:"A student-mentor app which updates the mentors and students",
        link:  "https://student-mentor-pg.herokuapp.com/",
        gitUrl:"https://github.com/rahullokanathan/Student-Mentor-Task",

    },
        
        


    ];
    return (
        <Element className="projectContainer" id="projects">
            <h1>Projects</h1>
            <p> Check out the Projects I have done!</p>
            <div className="projectContainer__projects">

                {projects.map((project, index) => {
                    return (
                        <Project key={index}
                            img={project.img}
                            title={project.title}
                            desc={project.desc}
                            link={project.link}
                            gitUrl={project.gitUrl}
                             />
                             
                    );
                })}

            </div>

        </Element>
    );
}

export default ProjectContainer;
