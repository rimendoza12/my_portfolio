import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css';
 import logo1 from '../../ImagePic/HTML.png';
 import logo2 from '../../ImagePic/CSS3.png';
 import logo3 from '../../ImagePic/Bootstrap.png';
 import logo4 from '../../ImagePic/Javascript.png';
 import logo5 from '../../ImagePic/reactjs.png';
 import logo6 from '../../ImagePic/PHP.png';
 import logo7 from '../../ImagePic/mysql.png';
 import logo8 from '../../ImagePic/Laravel.png';

 import icon1 from '../../ImagePic/facebook.png';
  import icon2 from '../../ImagePic/linkedin.png';
  import icon3 from '../../ImagePic/github.png';


function Contact() {
   
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_91gr2fl', 'template_2tyubom', form.current, '38mGPfFLydXSmiYKB')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Email Sent');
        }, (error) => {
            console.log(error.text);
        });
      };
  return (
    <section id="contactPage">
        <div id="experience">
        <h2 className="experienceTitle"> Skills</h2>
        <div className="experienceImgs">
          <div className="experienceImgContainer">
          <img src={logo1} alt="logo1" className="experienceImg" />
          <p>HTML</p>
          </div>
          <div className="experienceImgContainer">
            <img src={logo2} alt="logo2" className="experienceImg" />
            <p>CSS</p>
            </div>
          <div className="experienceImgContainer">
            <img src={logo3} alt="logo3" className="experienceImg" />
            <p>Bootstrap</p>
            </div>
          <div className="experienceImgContainer">
            <img src={logo4} alt="logo4" className="experienceImg" />
            <p>Javascript</p>
            </div>
          <div className="experienceImgContainer"> 
          <img src={logo5} alt="logo5" className="experienceImg" />
          <p>Reactjs</p>
          </div>
          <div className="experienceImgContainer">
            <img src={logo6} alt="logo6" className="experienceImg" />
            <p>PHP</p>
            </div>
          <div className="experienceImgContainer">
            <img src={logo7} alt="logo7" className="experienceImg" />
            <p>mysql</p>
            </div>
          <div className="experienceImgContainer"> 
          <img src={logo8} alt="logo8" className="experienceImg" />
          <p>Laravel</p>
          </div>
        </div>
        
      <div id="contact">
        <h2 className="contactPageTitle">Contact Me</h2>
        <span className="contactDesc">Drop Me A Message To Discuss Any Work Opportunities.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name"  name='your_name'/>
          <input type="email" className="email" placeholder="Your Email" name= 'your_email' />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message" ></textarea>
          <button type="submit" value="Send" className="submitBtn">Submit</button> 
          </form>

          <div className="links">
        <img src={icon1} alt="facebook" className="link" onClick={()=>{window.open('https://web.facebook.com/riza.mendoza.16')}} />
        <img src={icon2} alt="linkedIn" className="link" onClick={()=>{window.open('https://www.linkedin.com/in/riza-s-mendoza12/')}} />
        <img src={icon3} alt="GitHub" className="link" onClick={()=>{window.open('https://github.com/rimendoza12')}} />
      </div> 
        </div>
      </div>
    </section>
  )
}
          
          
        
      

export default Contact
