import React from 'react';
import './Projects.css';
import Project1a from '../../ImagePic/image1-a.jpeg';
// import Project1b from '../../ImagePic/image1-b.jpeg';
// import Project1c from '../../ImagePic/image1-c.jpeg';
import Project2d from '../../ImagePic/image2-d.jpeg';
// import Project2a from '../../ImagePic/image2-a.jpeg';
// import Project2b from '../../ImagePic/image2-b.jpeg';
import Project3e from '../../ImagePic/image3-e.jpeg';
// import Project3a from '../../ImagePic/image3-a.jpeg';
// import Project3b from '../../ImagePic/image3-b.jpeg';


function Projects() {
  
  
  return (
    <section id="works">
      <h2 className="worksTitle">Projects</h2>
      <div className="workImgs">
        <span className="workContainer">
          <img src={Project1a} alt="Project1a" className="workImg" />
          <h3 className="projectTitle">Project One</h3>
          
          <button className= "projectBtn" 
          onClick={()=>{window.open("https://rimendoza12.github.io/RM_mini_project1/")}}>
            Demo</button>
          </span>
        <span className="workContainer">
          <img src={Project2d} alt="Project2d" className="workImg" />
          <h3 className="projectTitle">Project Two</h3>
          
          <button className= "projectBtn"
          onClick={()=>{window.open("https://mp2-d13s.vercel.app/")}}
          >Demo</button>
          </span>
        <span className="workContainer">
          <img src={Project3e} alt="Project3e" className="workImg" />
          <h3 className="projectTitle">Project Three</h3>
          
          <button className= "projectBtn"
           onClick={()=>{window.open("https://capstone-front-end-gz1y-7vp7t1ji9-rimendoza12.vercel.app/")}}>
            Demo</button>
          </span>
      </div>
      
    </section>
  )
}

export default Projects
