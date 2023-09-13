import React from 'react';
import './Intro.css';
import ReactRotatingText from 'react-rotating-text';
import {Link} from 'react-scroll';

function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
            <div className="welcome">Welcome to My Website</div>
            <div className="introText">Hello, I'm<span className="introName"> Riza </span></div>
            <div className="introJob"><ReactRotatingText  items ={["Full-Stack Web Developer","Web Designer"] } /></div>
            
            <Link><button className="btn" onClick={()=>{
              document.getElementById('contact').scrollIntoView({behavior:'smooth'})
              }}>
              Contact Me</button>
            </Link>
          </div>
            
     
     
        

    </section>

  )
}

export default Intro
