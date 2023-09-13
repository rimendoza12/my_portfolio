import React from 'react';
import './About.css'
import UIdesign from '../../ImagePic/UIdesign.png';
import Webdesign from '../../ImagePic/Webdesign.png';
import Webdevelopment from '../../ImagePic/Webdevelopment.png';

function About() {
  return (
    <section id="about">
      <span className="aboutTitle">About Me</span>
      <span className="aboutDesc">I'm a career shifter searching for opportunities in the IT industry. I recently finished the Kodego Bootcamp training with Full-Stack Web Development course.This training equipped me with the knowledge and skills on different tech stacks to create and develop web designs and applications.</span>  
      <span className="skillTitle">What I do</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIdesign} alt="UI" className="skillBarImg"/>
          <div className="skillBarText">
            <h3>UI/UX Design</h3>
            <p>creating user-friendly interfaces</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Webdesign} alt="Webdesign" className="skillBarImg"/>
          <div className="skillBarText">
            <h3>Web Design</h3>
            <p>design web applications</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Webdevelopment} alt="Webdev" className="skillBarImg"/>
          <div className="skillBarText">
            <h3>Web Dev</h3>
            <p>develop web applications</p>
          </div>
        </div>
        </div>   
    </section>
  )
}

export default About
